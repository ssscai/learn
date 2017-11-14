var ws = require('nodejs-websocket');
var clientCount=0;
var server = ws.createServer(function (conn) {
    console.log('new connection');
    clientCount++;
    conn.nickname='user'+clientCount;
    var mes={
        type:'enter',
        data:conn.nickname+'coming in '
    }
    broadcast(JSON.stringify(mes));
    conn.on('text', function (str) {
        console.log('Receved' + str);
        var mes={
            type:'message',
            data:conn.nickname+'say::'+str
        }
        broadcast(JSON.stringify(mes));
        //收到消息广播出去
        broadcast(str)
    });
    conn.on('close',function(code,reason){
        console.log('connection closed');
        var mes={
            type:'leave',
            data:conn.nickname+'......leaving '
        }
        broadcast(JSON.stringify(mes));
    })
    conn.on('error',function(error){
        console.log('e')
    })
}).listen(8001);
function broadcast(str){
    //server.connections 保存server下面的所有连接
    server.connections.forEach(function(connection){
        connection.sendText(str)
    })
}