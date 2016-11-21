//var amqp = require('amqplib/callback_api');
//
//
//
//amqp.connect('amqp://'+'127.0.0.1'+':'+5672, {'noDelay': true}, function (err, conn) {
//    if (!err) {
//        console.log('-----MQ连线初始化成功');
//        conn.createChannel(function (err, ch) {
//                if (err !== null) {
//                    return bail(err);
//                }
//                ch.assertQueue("testService", {durable: false});
//                ch.prefetch(1);  //多个消费时，分配规则
//                var ackSend = function (msg, content) {
//                    console.log(content);
//                    console.log(new Buffer(content));
//                    ch.sendToQueue(msg.properties.replyTo, new Buffer(content), {});
//                    ch.ack(msg);
//                };
//                var reply = function (msg) {
//                    console.log("收到的");
//                    console.log(msg.content.toString());
//                    var temp=JSON.parse(msg.content.toString());
//                    var backNode={};
//                    backNode.rst=3;
//                    if(temp.rst==1){
//                        backNode.rst=3;
//                    }else{
//                        backNode.rst=999;
//                    }
//                    ackSend(msg, JSON.stringify(backNode));
//                };
//                ch.consume("testService", reply, {noAck: false});
//            }
//        );
//
//        process.once('SIGINT', function () {
//            self.conn.close();
//        });
//    }
//});