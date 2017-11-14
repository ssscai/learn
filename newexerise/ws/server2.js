var http=require('http');
var server2=http.createServer(function(request,response){
    console.log(`请求过来的地址${request.url}`);
    console.log(`请求的方式${request.method}`);
    response.write('abc');//输出一些东西出来
    response.write('mfg');
    response.end();

});
server2.listen(8090);
//客户端不可能操作服务端所有的文件