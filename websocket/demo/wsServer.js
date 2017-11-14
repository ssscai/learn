var ws = require('nodejs-websocket');
var clientCount=0;
var server = ws.createServer(function (conn) {
    console.log('new connection');
    clientCount++;
    conn.nickname='user'+clientCount;
    broadcast( conn.nickname+'coming in ');
    conn.on('text', function (str) {
        console.log('Receved' + str);
        //收到消息广播出去
        broadcast(str)
    });
    conn.on('close',function(code,reason){
        console.log('connection closed');
        broadcast(conn.nickname+'.............left')
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