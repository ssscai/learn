var http=require('http');
var io=require('socket.io');
//1.首先创建httpserver
let httpServer=http.createServer();
httpServer.listen('9088');
//2.创建io服务
let wsServer=io.listen(httpServer);
//3.建立连接
wsServer.on('connection',function(socket){
    console.log('建立连接');
    socket.on('a',function(n1,n2){
        console.log(n1,n2)
    })
})