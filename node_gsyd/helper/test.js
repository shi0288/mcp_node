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

//var rhday=23;
//
//var tempDay=dateMathUtil.datePart('d');
//var tempMonth=dateMathUtil.datePart('m');
//var repayDay;
//if(rhday>=tempDay){
//    repayDay=dateMathUtil.pointDay(tempMonth,rhday);
//}else{
//    repayDay=dateMathUtil.pointDay(tempMonth+1,rhday);
//}
//console.log(moment(repayDay).format("YYYY-MM-DD"));
//
//var realFirstAccrueDay=dateMathUtil.dateMonthAdd(loanObj.final_time, loanObj.day_month, -loanObj.deadline + period);



var loanObj={};
loanObj.rate=0.095;
loanObj.money=1000000;
//
////============第1种
//loanObj.day_month=26;
//loanObj.rhday=30;
//loanObj.final_time=new Date("2017-02-25");
//loanObj.accrue_time=new Date("2016-10-29");


//71.51 	10月30日	还款为10月29日至11月25日利息
//79.17 	11月30日	还款为11月26日至12月25日利息
//79.17 	12月30日	还款为12月26日至1月25日利息
//79.17 	1月30日	还款为1月26日至2月24日利息
//0.00 	2月25日	出借本金

//============第2种
//loanObj.day_month=30;
//loanObj.rhday=30;
//loanObj.final_time=new Date("2017-02-28");
//loanObj.accrue_time=new Date("2016-11-30");

//79.17 	12月30日	还款为11月30日至12月29日利息
//79.17 	1月30日	还款为12月30日至1月29日利息
//79.17 	2月28日	1月30日至2月27日利息 + 出借本金


//============第3种
//loanObj.day_month=28;
//loanObj.rhday=30;
//loanObj.final_time=new Date("2017-06-27");
//loanObj.accrue_time=new Date("2017-02-28");

//79.17 	3月30日	还款为2月28日至3月29日利息
//79.17 	4月30日	还款为3月30日至4月29日利息
//79.17 	5月30日	还款为4月30日至5月29日利息
//79.17 	6月27日	5月30日至6月26日利息 + 出借本金


//============第4种
//loanObj.day_month=30;
//loanObj.rhday=30;
//loanObj.final_time=new Date("2017-02-28");
//loanObj.accrue_time=new Date("2016-10-31");


//79.17 	11月30日	还款为10月31日至11月29日利息
//79.17 	12月30日	还款为11月30日至12月29日利息
//79.17 	1月30日	还款为12月30日至1月29日利息
//79.17 	2月28日	1月30日至2月27日利息 + 出借本金



//============第5种
//loanObj.day_month=26;
//loanObj.rhday=30;
//loanObj.final_time=new Date("2017-02-25");
//loanObj.accrue_time=new Date("2016-11-03");

//58.74 	11月3日	还款为11月3日至11月25日利息
//79.17 	11月30日	还款为11月26日至12月25日利息
//79.17 	12月30日	还款为12月26日至1月25日利息
//79.17 	1月30日	还款为1月26日至2月24日利息
//0.00 	2月25日	出借本金
//    loanObj.rate=0.0925;
//    loanObj.money=5474*100;
//    loanObj.day_month=29;
//    loanObj.rhday=6;
//    loanObj.final_time=new Date("2017-02-28");
//    loanObj.accrue_time=new Date("2017-02-04");
//    var loanRepayObjArr=calculateService.outRhjfAyfx(loanObj);
//    for(var i=0;i<loanRepayObjArr.length;i++){
//        console.log(moment(loanRepayObjArr[i].repay_day).format("YYYY-MM-DD")+'  '+loanRepayObjArr[i].money/100+'  '+loanRepayObjArr[i].interest/100);
//    }

//.584] [INFO] console - 2017-03-28
//    [2016-11-03 16:36:55.585] [INFO] console - 2017-02-28
//    [2016-11-03 16:36:55.586] [INFO] console - 2017-02-28

//console - 2016-12-26
//    [2016-11-03 16:37:29.821] [INFO] console - 2016-11-26
//    [2016-11-03 16:37:29.821] [INFO] console - 2016-11-26

