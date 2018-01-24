const express=require('express');
const server=express();
server.listen(8080);
server.get('/baidu.com',function(req,res,next){
    res.redirect('http://www.baidu.com/')
})