var express = require('express'), app = express();
var http = require('http');
var async = require('async');
var httpServer = http.createServer(app);

var config = require('mcp_config');
var prop = config.prop;
var errCode = config.ec;

var util = require('mcp_util');
var gatewayInterUtil = util.gatewayInterUtil;

var esut = require("easy_util");
var log = esut.log;


var Filter = function () {
    var self = this;
};

Filter.prototype.start = function () {
    var self = this;
    async.waterfall([
        //start web
        function (cb) {
            self.startWeb();
            cb(null, "success");
        }
    ], function (err, result) {
        if (err) {
            console.error(err); // -> null
        }
        else {
            console.log(result); // -> 16
        }
    });
};


Filter.prototype.startWeb = function () {
    var self = this;
    //是Connect內建的middleware，设置此处可以将client提交过来的post请求放入request.body中
    app.use(express.bodyParser());
    //是Connect內建的，可以协助处理POST请求伪装PUT、DELETE和其他HTTP methods
    app.use(express.methodOverride());
    //route requests
    app.use(app.router);
    app.configure('development', function () {
        app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
    });
    app.configure('production', function () {
        app.use(express.errorHandler());
    });

    app.post("/gs-filter/main/interface.htm", function (req, res) {
        var message = req.body.message;
        var start = new Date().getTime();
        self.handle(message, function (err, backMsg) {
            try {
                res.type('application/json;charset=utf-8');
                res.send(backMsg);
            }
            catch (err) {
                log.info(err);
            }
            var end = new Date().getTime();
            log.info("用时:" + (end - start) + "ms");
        });
    });

    app.get("/gs-filter/main/interface.htm", function (req, res) {
        var message = req.query.message;
        self.handle(message, function (err, backMsg) {
            try {
                res.type('application/json;charset=utf-8');
                res.send(backMsg);
            }
            catch (err) {
                log.info(err);
            }
        });
    });
    app.post("/main/notify.htm", function (req, res) {
        var message = req.body.message;
        log.info(message);
        res.json({});
    });

    httpServer.listen(prop.filterPort);
    log.info("Filter程序在端口" + prop.filterPort + "启动.........");
};

Filter.prototype.handle = function (message, cb) {
    var self = this;
    var headNode;
    try {
        var msgNode = JSON.parse(message);
        headNode = msgNode.head;
    }
    catch (err) {
        var backHeadNode = {digestType: "MD5"};
        var backBodyStr = JSON.stringify(errCode.E0005);
        var backMsg = JSON.stringify({head: backHeadNode, body: backBodyStr});
        cb(null, backMsg);
        return;
    }

    self.checkHeadNode(headNode,function(err){
        if(err){
            var errHeadNode = {digestType: "MD5"};
            var errBodyStr = JSON.stringify(errCode.E2030);
            var errBackMsg = JSON.stringify({head: errHeadNode, body: errBodyStr});
            cb(null, errBackMsg);
        }else{
            gatewayInterUtil.get(message, function (err, backMsg) {
                if (err) {
                    log.error('problem with request: ', err);
                    var errHeadNode = {digestType: "MD5"};
                    var errBodyStr = JSON.stringify(errCode.E2000);
                    var errBackMsg = JSON.stringify({head: errHeadNode, body: errBodyStr});
                    cb(null, errBackMsg);
                }
                else {
                    cb(null, backMsg);
                }
            });
        }
    });
};

Filter.prototype.checkHeadNode = function (headNode, cb) {
    if (!headNode.version) {
        cb(true);
        return;
    }
    if (!headNode.messageid) {
        cb(true);
        return;
    }
    if (!headNode.userId) {
        cb(true);
        return;
    }
    if (!headNode.userType) {
        cb(true);
        return;
    }
    if (!headNode.digest) {
        cb(true);
        return;
    }
    if (!headNode.digestType) {
        cb(true);
        return;
    }
    if (!headNode.cmd) {
        cb(true);
        return;
    }
    if (!headNode.timestamp) {
        cb(true);
        return;
    }
    cb(null);
};

var f = new Filter();
f.start();