var http = require('http');
var fs = require('fs'); //文件系统
var server2 = http.createServer(function (request, response) {
    fs.readFile(`ad${request.url}`, function (err, data) {
        if (err) {
            fs.readFile('./httperrors/1.html',function(err,data){
                if(err){
                    response.writeHead(404);
                    response.write('not found');
                    response.end();
                }else{
                    response.writeHead(404);
                    console.log('data',data)
                    response.write(data);
                    response.end();
                }
            })
            // response.writeHead('404');//writeHead发状态码  浏览器能争取的解析
            // response.write('not found');
            //write内容 body,浏览器端认为这个文件是存在的
        }else{
            response.write(data);
            response.end();
        } 
    })
});
server2.listen(8090);
//客户端不可能操作服务端所有的文件