/**
 * Created by shiqm on 16-2-29.
 */
'use strict';

var async = require('async');
var util = require('easy_util');

var moment = require('moment');
var digestUtil = util.digestUtil;
var dateUtil = util.dateUtil;


var service = require('mcp_service');
var calculateService = service.calculateService;


var util = require('mcp_util');
var dateMathUtil = util.dateMathUtil;

//console.log(dateMathUtil.daysBetween('2016-7-7 12:23:33','2016-07-01 00:00:00'));
//
//console.log(dateMathUtil.dateToString(dateMathUtil.dateMonthAdd('2017-03-23 00:00:00', 31, -11)));
//var body = {};
//body.deadline = 10;
//body.live_deadline = 12;
//body.rate = 0.23;
//body.live_money = 1000000;
//body.final_time = '2017-01-26';
//body.day_month = 26;
//body.accrue_time = '2016-06-08';
//
//
//var loanRepayObjArr = calculateService.outDebxCal(body);
//
//var str="2016-12-4";
//console.log(dateUtil.transFormatToID(str));

//var back = {year: 2014};
//back.months = new Array();
//
//back.months[1]={month:1};
//back.months[1].days=new Array();
//var day={id:200};
//back.months[1].days.push(day);
//
//console.log(JSON.stringify(back));
//
//var condMonths=[1,2,3,4,5,6,7,8,9,10,12];
//
//async.eachSeries(condMonths, function (condMonth, cb) {
//    console.log(condMonth);
//    cb(null);
//},function(){
//
//    console.log('ok');
//});


//var info = [
//    {id:33, code:'recheck', des:'复核'},
//    {id:133, code:'calculate', des:'计算利息'}
//];
//
//for(var key in info)
//{
//    console.log(key);
//};


//var firstMoneyDaysNum = dateMathUtil.daysBetween(loanRepayObjArr[i].repay_day, loanObj.accrue_time);


//
//var sql = "SELECT loan.name,invest.create_time,invest.money," +
//    "(select sum(invest_repay.money)+sum(invest_repay.interest)+sum(invest_repay.st_interest) " +
//    "from  invest_repay where invest_repay.status=0 and invest.id=invest_repay.invest_id)   as sumWaitMoney  " +
//    "from invest LEFT JOIN loan  on invest.loan_id=loan.id where invest.status=1200 and (loan.status=1400 or loan.status=1500 or loan.status=1600)  and invest.user_id='" + "q001" + "'";
//console.log(sql);


//
//
//var ll=new Date();
//var a = 0, b = 1;
//for (var i = 0; i < 999999999; i++) {
//    var c = a + b;
//    a = b;
//    b = c;
//}
//console.log(new Date()-ll);

//alert(45.6*13);
//alert(0.7+0.1);//输出0.7999999999999999
//alert(0.6+0.2);//输出0.8

//var arithUtil=require('easy_util').arithUtil;
//
//console.log(arithUtil.add(0.1,0.7));
//console.log(arithUtil.add(0.6,0.2));
//console.log(arithUtil.mul(45.6,13));

//
//var async = require('async');
//
//var objs = [{name:'A'}, {name:'B'}, {name:'C'}];
//
//function doSomething(obj, cb)
//{
//    console.log("我在做" + obj.name + "这件事!");
//    cb("dd", obj);
//}
//
////async.each(objs, function(obj, callback) {
////    doSomething(obj, function(){
////        callback();
////    });
////}, function(err){
////    console.log("err is:" + err);
////});
//
//async.eachSeries(objs, function(obj, callback) {
//    doSomething(obj, function(err){
//        if(obj.name=='B'){
//            callback(err);
//        }else{
//            callback(null);
//        }
//
//    });
//}, function(err){
//    console.log("err is:" + err);
//});
//
//var noRepaySql = "SELECT sum(a.money) as allMoney,sum(a.interest) as allInterest,sum(a.st_interest) as AllStInterest" +
//    " from invest_repay a " +
//    " where a.invest_id in (select id from invest b where b.user_id =(SELECT id from user c where c.username='" + "q1" + "')) and a.status=0";
//
//console.log(noRepaySql);
//
//
//var i=1;
//var calCons=2
//
//console.log( i * calCons);

//var temp=new Array();
//temp.push(1);
//temp.push(2);
//temp.push(13);
//temp.push(4);
//
//console.log(temp.length);
//console.log(temp[2]);
//delete temp[2];
//console.log(temp[2]);

//var days = dateMathUtil.daysBetween(dateUtil.getCurTime(true), '2016-04-02');
//console.log(days);
//
//var arr = new Array(5);
//var i=0;
//arr[0]={aaa:333};
//async.eachSeries(arr, function (obj,repayCall) {
//    arr[i]={
//        id:i
//    };
//        i++;
//    console.log(obj);
//    repayCall();
//}, function (err) {
//  console.log('ok');
//});
//console.log(arr);

//var investMoney=10000*100;
//var tempDeadline=10;
//var rate=0.14;
//var sumCorpusCurrent=0;
//for(var i=0;i<tempDeadline;i++){
//    var everyMonthRepayMoney = Math.round((investMoney * (rate / 12) * Math.pow(
//            (1 + rate / 12), tempDeadline))
//        / (Math.pow((1 + rate / 12), tempDeadline) - 1), 2);
//    //每月利息
//    var interestCurrent = Math
//        .round((investMoney * (rate / 12) - everyMonthRepayMoney) * Math.pow((1 + (rate / 12)), i) + everyMonthRepayMoney);
//
//    var corpusCurrent = everyMonthRepayMoney-interestCurrent;
//    sumCorpusCurrent+=corpusCurrent;
//    if (i+1 == tempDeadline) {
//        corpusCurrent= corpusCurrent+(investMoney-sumCorpusCurrent);
//    }
//    console.log("本息："+everyMonthRepayMoney/100 +"  本金:"+corpusCurrent/100+"  利息:"+interestCurrent/100);
//}


//
//async.waterfall([
//    function(cb){
//        console.log("第一步");
//        cb(null,'我是第一步');
//    },
//    function(data,cb){
//        console.log("第二步");
//        cb(null);
//    },
//    function(cb){
//        console.log("第三步");
//        cb(null);
//    }
//],function(err){
//   console.log('结束');
//});
//console.log(digestUtil.sha1('guoshangyidai189'));
//
//console.log(dateUtil.toCurrentDate()*100000+1);


//dc.init(function (err) {
//    //var managelog=dc.main.get('managelog');
//    //var cond={};
//    //cond.user_id='admin';
//    //cond.id=digestUtil.createUUID();
//    //cond.des='额是测试测试';
//    //cond.create_time = dataUtil.getCurTime();
//    //managelog.save(cond, [], function (err, data) {
//    //    if (err) {
//    //        console.error('更新项目状态出错');
//    //    } else {
//    //    }
//    //});
//
//
//    var loan = dc.main.get('loan');
//    var bodyNode={};
//    bodyNode.cond={};
//    bodyNode.files={};
//    bodyNode.files.id=1;
//    bodyNode.files.name=1;
//    bodyNode.files.status=1;
//    bodyNode.files.business_type=1;
//    bodyNode.sort={};
//    bodyNode.sort.status={};
//    bodyNode.sort.status.rsss=1;
//    bodyNode.sort.status.sfds=2;
//    bodyNode.sort.status.sggaa=3;
//    bodyNode.sort.status.sssgggg=4;
//    bodyNode.sort.acti=2;
//    bodyNode.sort.sdfdsfsdf='sadfas';
//
//
//
//
//    console.log(typeof bodyNode.sort.status);
//    console.log(typeof bodyNode.sort.acti);
//    console.log(typeof bodyNode.sort.sdfdsfsdf);
//
//
//
//    //bodyNode.skip='2';
//    //bodyNode.limit='10';
//    //
//    //var cursor = loan.find(bodyNode.cond, bodyNode.files, []).sort(bodyNode.sort).limit(bodyNode.skip, bodyNode.limit);
//    //cursor.dateToString();
//    //cursor.toArray(function(err, data){
//    //    for(var key in data)
//    //    {
//    //        var set = data[key];
//    //    }
//    //    var backBodyNode={};
//    //    backBodyNode.rst = data;
//    //    backBodyNode.count = cursor.count(function(err, count){
//    //        backBodyNode.count = count;
//    //        console.log(backBodyNode);
//    //    });
//    //});
//var loanRepayObjArr = new Array(35);
//var outRepayObjArr = new Array(36);
//var outLoanEveryMonthRepayMoney = calculateService.deMonthSumCal(0.15, 1200000, 36);
//var outCurLoanMoney = 0;
//for (var i = 0; i < 36; i++) {
//    var liveLoanPeriod = i + 1;
//    outRepayObjArr[i] = {};
//    //计算利息
//    var outLoanInterest = calculateService.deMonthInterestCal(0.15, 1200000, outLoanEveryMonthRepayMoney, liveLoanPeriod);
//    //计算本金
//    var out_money = outLoanEveryMonthRepayMoney - outLoanInterest;
//    outCurLoanMoney += out_money;
//    if (liveLoanPeriod == 36) {
//        out_money = out_money + (1200000 - outCurLoanMoney);
//    }
//    outRepayObjArr[i].money = out_money;
//    outRepayObjArr[i].interest = outLoanInterest;
//}
//for (var i = 0; i < 35; i++) {
//    var loanPeriod = i + 1;
//    var outLoanPeriod = 36 - 35 + i;
//    loanRepayObjArr[i] = {};
//    loanRepayObjArr[i].id = "2222" + '_' + (i + 1);
//    loanRepayObjArr[i].repay_day = dateMathUtil.dateMonthAdd('2019-08-05 00:00:00', 5, -35 + 36);
//    if (loanPeriod == 1) {
//        //***日利息=[（第一次返息日-线上起息日）/（第一次返息日-线下起息日）] * 第一期应还利息
//        //计息日到第一次还款日时间差
//        var firstMoneyDaysNum = dateMathUtil.daysBetween(loanRepayObjArr[i].repay_day, '2016-09-09 00:00:00');
//        //上一次线下还款日到第一次还款日时间差
//        var outRepayTime = dateMathUtil.dateMonthAdd('2019-08-05 00:00:00', 5, -35);
//        var firstMoneyOutDaysNum = dateMathUtil.daysBetween(loanRepayObjArr[i].repay_day, outRepayTime) + 1;
//        loanRepayObjArr[i].interest = Math.round(firstMoneyDaysNum / firstMoneyOutDaysNum * outRepayObjArr[outLoanPeriod].interest);
//        loanRepayObjArr[i].money = Math.round(firstMoneyDaysNum / firstMoneyOutDaysNum * outRepayObjArr[outLoanPeriod].money);
//
//    }
//    else {
//        loanRepayObjArr[i].interest = outRepayObjArr[outLoanPeriod].interest;
//        loanRepayObjArr[i].money = outRepayObjArr[outLoanPeriod].money;
//    }
//    loanRepayObjArr[i].loan_id = '2222';
//    loanRepayObjArr[i].period = loanPeriod;
//    loanRepayObjArr[i].all_period = 35;
//    loanRepayObjArr[i].st_interest = 0;
//    loanRepayObjArr[i].status = 0;//0为还款  1已还
//}
//
//console.log(dateMathUtil.daysBetween('2016-09-09 00:00:00', '2016-09-09 00:00:00'));


//var deadline=27;
//var sumInterest = calculateService.daysCal(deadline, 0.095, 150000);
//var repay_day = dateMathUtil.dateAdd('d', undefined, deadline);
//console.log(dateUtil.toString(repay_day));


//var sumInterest = calculateService.monthCal(0.10, 30000);

//console.log(sumInterest);






var startNum = 0;
var i = 0;

//正在处理的投资人顺序索引
var order = 1;
var loanObj={rate:0.089,money:8000000,deadline:1,day_month:21,final_time:'2016-11-23 00:00:00',accrue_time:'2016-10-25 00:00:00'};
var sumInterest = calculateService.monthCal(loanObj.rate, loanObj.money);
var loanRepayObjArr = new Array(loanObj.deadline);
var hadRepayObjArr = new Array(loanObj.deadline);
var firstMoneyDaysNum=0;
var firstMoneyOutDaysNum=0;

var data=new Array();
var data1={money:170000};
var data2={money:2740000};
var data3={money:4740000};
var data4={money:280000};
var data5={money:70000};
data[0]=data1;
data[1]=data2;
data[2]=data3;
data[3]=data4;
data[4]=data5;
var count=5;

async.eachSeries(data, function (investObj, callback) {
    var _index = 0;
    var invest_interest = 0;
    var invest_st_interest = 0;
    async.eachSeries(loanRepayObjArr, function (obj, repayCall) {
        var period = _index + 1;
        if (loanRepayObjArr[_index] == undefined) {
            loanRepayObjArr[_index] = {};
            loanRepayObjArr[_index].id = '借款计划_' + period;
            loanRepayObjArr[_index].money = 0; //-----需叠加
            loanRepayObjArr[_index].repay_day = dateMathUtil.dateMonthAdd(loanObj.final_time, loanObj.day_month, -loanObj.deadline + period);
            if (period == 1) {
                //日利息=[（第一次返息日-线上起息日）/（第一次返息日-线下起息日）] * 投资金额 * 年利率 / 12
                //计息日到第一次还款日时间差
                firstMoneyDaysNum= dateMathUtil.daysBetween(loanRepayObjArr[_index].repay_day, loanObj.accrue_time);
                //上一次线下还款日到第一次还款日时间差
                var outRepayTime = dateMathUtil.dateMonthAdd(loanObj.final_time, loanObj.day_month, -loanObj.deadline);
                firstMoneyOutDaysNum= dateMathUtil.daysBetween(loanRepayObjArr[_index].repay_day, outRepayTime);
                loanRepayObjArr[_index].interest = Math.round(firstMoneyDaysNum / firstMoneyOutDaysNum * sumInterest);
            } else {
                loanRepayObjArr[_index].interest = sumInterest;
            }
            loanRepayObjArr[_index].loan_id = loanObj.id;
            loanRepayObjArr[_index].st_interest = 0;//-----需叠加
            loanRepayObjArr[_index].period = period;
            loanRepayObjArr[_index].all_period = loanObj.deadline;
            loanRepayObjArr[_index].status = 0;//0为还款  1已还
            //init 叠加每个投资人的本金和利息
            hadRepayObjArr[_index] = {};
            hadRepayObjArr[_index].hadInterest = 0;
        }
        //计算本金
        var money = 0;
        if (period == loanObj.deadline) {
            money = investObj.money;
        }
        //计算利息
        var interest = 0;
        if (order == count) {
            //最后一个投资人，用总的借款利息减去其他投资人的利息，保证借款与投资方利息持平
            interest = loanRepayObjArr[_index].interest - hadRepayObjArr[_index].hadInterest;
        } else {
            if(period==1){
                //日利息=[（第一次返息日-线上起息日）/（第一次返息日-线下起息日）] * 投资金额 * 年利率 / 12
                interest =  Math.round(firstMoneyDaysNum / firstMoneyOutDaysNum * calculateService.monthCal(loanObj.rate, investObj.money));
            }else{
                interest = calculateService.monthCal(loanObj.rate, investObj.money);
            }
            hadRepayObjArr[_index].hadInterest += interest;
        }
        //即投计算
        var st_interest = 0;
        var cond = {};
        cond.id = '出借人' + order+'_' + period;
        cond.money = money;
        cond.interest = interest;
        cond.repay_day = loanRepayObjArr[_index].repay_day;
        cond.st_interest = st_interest;
        cond.create_time = dateUtil.getCurTime();
        cond.period = period;
        cond.all_period = loanObj.deadline;
        //叠加借款人还款记录
        loanRepayObjArr[_index].money += cond.money;
        loanRepayObjArr[_index].st_interest += cond.st_interest;
        //当前投资人投资记录
        invest_interest += interest;
        invest_st_interest += st_interest;
        _index++;
        console.log(JSON.stringify(cond));
        repayCall();
    }, function (err) {
        order++;
        callback();
    });
}, function (err) {
    console.log('完成');
});

