//var amqp = require('amqplib/callback_api');
//
//
//
//amqp.connect('amqp://'+'127.0.0.1'+':'+5672, {'noDelay': true}, function (err, conn) {
//    if (!err) {
//        console.log('-----MQ连线初始化成功');
//        conn.createChannel(function (err, ch) {
//            if (err !== null) {
//                conn.close();
//            }
//            ch.assertQueue('testway2', {durable: false}, function (err, ok) {
//                if (err !== null) {
//                    conn.close();
//                }
//                ch.consume('testway2', function (msg) {
//                    var backNode = JSON.parse(msg.content.toString());
//                    console.log("`````````````");
//                    console.log(msg);
//                    console.log(backNode);
//                    console.log(msg.content.toString());
//                    console.log("`````````````");
//                    ch.ack(msg);
//                    ch.close();
//                }, {noAck: false});
//
//                var content={};
//                content.rst=2;
//                console.log(" servce send:" + JSON.stringify(content));
//                ch.sendToQueue("testService", new Buffer(JSON.stringify(content)), {replyTo: "testway2"})
//            })
//        });
//        process.once('SIGINT', function () {
//            self.conn.close();
//        });
//    }
//});