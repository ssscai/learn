const http=require('http');
const url=require('url');
const querystring=require('querystring');
http.createServer(function(request,response){
   let {pathname,query}= url.parse(request.url,true)
   console.log(request.url,'sss',url.parse(request.url,true))
   console.log('接收到了get数据',pathname,query);

//    POST数据
let aBuffer=[];
request.on('data',function(data){
    console.log(data,'post')
    aBuffer.push(data)
})
request.on('end',function(){
    let data=Buffer.concat(aBuffer);
    //console.log(request.headers,'request.headers')
    console.log(request.headers['content-type'])
    //multipart/form-data; boundary=----WebKitFormBoundarynO2W7sv7GXYC4mOP
    
    //console.log('Post',data.toString())
    //console.log('stst',querystring.parse(data.toString()))
})
}).listen(8090)
