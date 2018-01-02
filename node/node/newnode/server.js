const http=require('http');
const url=require('url');
const querystring=require('querystring');
http.createServer(function(request,response){
   let {pathname,query}= url.parse(request.url,true)
   console.log(request.url,'sss',url.parse(request.url,true))
   console.log('接收到了get数据',pathname,query)
   
}).listen(8090)
