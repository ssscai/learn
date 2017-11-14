var ws = require('nodejs-websocket');
var server = ws.createServer(function (conn) {
    console.log('new connection');
    conn.on('text', function (str) {
        console.log('Receved' + str);
        conn.sendText(str)
    });
    conn.on('close',function(code,reason){
        console.log('connection closed')
    })
    conn.on('error',function(error){
        console.log('e')
    })
}).listen(8001)