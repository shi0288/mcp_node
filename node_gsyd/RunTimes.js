/**
 * Created by shiqm on 16-4-11.
 */
'use strict';

var async = require('async');
var task = require("mcp_task");
var loanTask = task.loanTask;
var dc = require('mcp_db').dc;
var esut = require("easy_util");
var log = esut.log;

var RunTimes = function () {
    var self = this;
};


RunTimes.prototype.start = function () {
    async.waterfall([
        function (cb) {
            dc.init(function (err) {
                cb(err);
            });
        },
        function (cb) {
            loanTask.run();
            cb(null, "success");
        }
    ], function (err, result) {
        if (err) {
            log.error(err); // -> null
        }
        else {
            log.info(result); // -> 16
        }
    });
};

var runTimes = new RunTimes();
runTimes.start();