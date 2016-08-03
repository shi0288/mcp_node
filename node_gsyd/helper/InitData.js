var esut = require('easy_util');
var digestUtil = esut.digestUtil;
var async = require('async');
var dc = require('mcp_db').dc;

var m1 = digestUtil.createUUID();
var m2 = digestUtil.createUUID();
var m3 = digestUtil.createUUID();


var menus = [
    {id: m1, name: '菜单管理', type: 'management', status: '1', seqNum: 0},
    {id: m2, name: '菜单管理>>>', type: 'management', status: '1', seqNum: 0, pid: m1},
    {id: m3, name: '菜单列表', type: 'management', url: '/admin/menu/menuList.htm', status: '1', seqNum: 0, pid: m2}
];

var r1 = digestUtil.createUUID();
var roles = [
    {id: r1, name: '管理员'}
];
var roles_menus = [
    {role_id: r1, menu_id: m1},
    {role_id: r1, menu_id: m2},
    {role_id: r1, menu_id: m3}
];



var init = function () {
    async.waterfall([
        function (cb) {
            dc.init(function (err) {
                cb(err);
            });
        },
        function (cb) {
            var table = dc.main.get('menu');
            async.eachSeries(menus, function (menu, callback) {
                table.save(menu, [], function (err) {
                    callback(null);
                });
            }, function (err) {
                cb(null);
            })
        },
        function(cb){
            var table = dc.main.get('role');
            async.eachSeries(roles, function (role, callback) {
                table.save(role, [], function (err) {
                    callback(null);
                });
            }, function (err) {
                cb(null);
            })
        },
        function(cb){
            var table = dc.main.get('role_menu');
            async.eachSeries(roles_menus, function (role, callback) {
                table.save(role, [], function (err) {
                    callback(null);
                });
            }, function (err) {
                cb(null);
            })
        },
        function(cb){
            var table = dc.main.get('user_role');
            var boyd={
                user_id:'a3f7a2a81b864b2cb4eb3246353199e6',
                role_id:r1
            };
            table.save(boyd, [], function (err) {
                cb(null);
            });
        }
    ], function (err, result) {
        console.log("end...........");
    });
};


init();