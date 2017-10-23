use "strict";
const http=require('http');
const server=http.createServer();
//监听request事件  当有请求发送给server的时候就触发了request事件
server.on('request',function(request,response){

})