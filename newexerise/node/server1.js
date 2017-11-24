const url=require('url');
const http = require('http');
let httpServer=http.createServer(function(req,res){
    let {
        pathname,
        query
    } = url.parse(req.url, true);
    console.log(pathname,query,'kiki')
});
httpServer.listen(7878)