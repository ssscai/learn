var http=require('http');
var server=http.createServer(function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*')
    response.write('abc');
    response.end();
})
server.listen(8086)