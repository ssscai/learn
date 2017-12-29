var http=require('http');
var url=require('url');
var fs=require('fs');
var zlib=require('zlib')
http.createServer(function(req,res){
 let {pathname,query}=url.parse(req.url,true);
 console.log(url.parse(req.url,true),'url.parse(req.url,true)')
    // fs.readFile(`www${pathname}`,function(err,data){
    //     if(err){
    //         res.writeHead(404);
    //         res.write('not-found')
    //     }else{
    //         res.write(data)
    //     }
    //     res.end();
    // })
    res.setHeader('Content-Encoding','gzip')
    let rs=fs.createReadStream(`www${pathname}`);
    let gz=zlib.createGzip();
    rs.pipe(gz).pipe(res)
    //rs.pipe(res);
    rs.on('error',function(){
        res.writeHead(404);
        res.write('not found  sss');
        res.end()
    })
}).listen(8090);