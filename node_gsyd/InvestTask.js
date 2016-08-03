/**
 * Created by shiqm on 16-3-15.
 */
'use strict';

var dc = require('mcp_db').dc;
var async = require('async');
var source = require("mcp_source");
var mqSource = source.mqSource;

var cons = require('mcp_constants');
var loanStatus = cons.loanStatus;
var investStatus = cons.investStatus;
var userBillCons = cons.userBillCons;

var service = require('mcp_service');
var userBillSer = service.userBillService;

var esut = require('easy_util');
var log = esut.log;

var async = require('async');

var q = 'server';
async.waterfall([
    //connect mq
    function (cb) {
        mqSource.init(q,function (err) {
            cb(err);
        });
    },
    function (cb) {
        dc.init(function (err) {
            cb(err);
        });
    },
    //校验基础数据的可用性
    function (cb) {
        dc.check(function (err) {
            cb(err);
        });
    }
], function (err) {
    mqSource.conn.createChannel(function (err, ch) {
            if (err !== null) {
                return bail(err);
            }
            ch.assertQueue(q, {durable: false});
            ch.prefetch(1);  //多个消费时，分配规则
            var ackSend = function (msg, content) {
                ch.sendToQueue(msg.properties.replyTo, new Buffer(content.toString()), {});
                ch.ack(msg);
            };
            var reply = function (msg) {
                async.waterfall([
                    //查询当前投资者信息
                    function (cb) {
                        log.info('查询当前投资者信息');
                        var bodyNode = JSON.parse(msg.content.toString());
                        var investTab = dc.main.get('invest');
                        investTab.findOne(bodyNode, {}, [], function (err, invest) {
                            cb(err, invest);
                        });
                    },
                    //判断投资记录状态是否可投
                    function (invest, cb) {
                        log.info('判断投资记录状态是否可投');
                        if (invest.status == investStatus.init) {
                            cb(null, invest);
                        } else {
                            //如果已经处理,则跳出不再继续
                            cb(true);
                        }
                    },
                    //查询当前投资项目信息
                    function (invest, cb) {
                        log.info('查询当前投资项目信息');
                        var loan_id = invest.loan_id;
                        var loanTab = dc.main.get('loan');
                        loanTab.findOne({id: loan_id}, {}, [], function (err, loan) {
                            cb(err, loan, invest);
                        });
                    },
                    //判断项目状态是否可投
                    function (loan, invest, cb) {
                        if (loan.status != loanStatus.raising) {
                            //如果项目状态非募集，则跳出
                            cb(true);
                        } else {
                            //查询已投的金额
                            var investMoney = invest.money;
                            var loanMoney = loan.money;
                            var hadMoney = loan.loan_money;
                            if (investMoney <= loanMoney - hadMoney) {
                                //投资有效则继续
                                if (investMoney + hadMoney == loanMoney) {
                                    cb(null, loan, invest, true);
                                } else {
                                    cb(null, loan, invest, false);
                                }
                            } else {
                                //如果已经投资金额过大，则跳出
                                cb(true);
                            }
                        }
                    },
                    //更新投资记录状态  all指项目是否已经被投资完
                    function (loan, invest, all, cb) {
                        var investTab = dc.main.get('invest');
                        investTab.update({id: invest.id}, {$set: {status: investStatus.bid_success}}, [], function (err) {
                            if (err) {
                                cb(err);
                            } else {
                                //判断项目是否满额
                                if (all) {
                                    //满额则更新项目状态
                                    var loanTab = dc.main.get('loan');
                                    loanTab.update({id: loan.id}, {
                                        $set: {
                                            status: loanStatus.recheck,
                                            loan_money: loan.money
                                        }
                                    }, [], function (err) {
                                        cb(err, invest);
                                    })
                                } else {
                                    //继续
                                    var loanTab = dc.main.get('loan');
                                    loanTab.update({id: loan.id}, {$set: {loan_money: loan.loan_money + invest.money}}, [], function (err) {
                                        cb(err, invest);
                                    });
                                }
                            }
                        });
                    },
                    //冻结投资金额
                    function (invest, cb) {
                        userBillSer.frozenMoney(invest.user_id,
                            invest.money,
                            userBillCons.payType.INVEST,
                            "投资成功：冻结金额。借款ID:" + invest.loan_id + "  投资ID:" + invest.id,
                            function (err, data) {
                                cb(null);
                            });
                    }
                ], function (err) {
                    if (err) {
                        ackSend(msg, false);
                    } else {
                        ackSend(msg, true);
                    }
                });
            };
            ch.consume(q, reply, {noAck: false});
        }
    )
});

function bail(err, conn) {
    console.log(err);
    if (conn) {
        conn.close(function () {
            process.exit(1);
        })
    }
}
