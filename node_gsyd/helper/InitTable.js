var async = require('async');
var dc = require('mcp_db').dc;
var prop = require('mcp_config').prop;

var initTerm = function () {
    async.waterfall([
        function (cb) {
            console.log(prop.main);
            dc.init(function (err) {
                cb(err);
            });
        },
        function (cb) {
            console.log("初始化应该成了");

        }
    ], function (err, result) {
        console.log("end...........");
    });
};


initTerm();

