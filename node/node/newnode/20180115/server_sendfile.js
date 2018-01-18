const express=require('express');
let server=express();
var path=require('path')
server.listen(8080);
server.use('/1.txt',function(req,res,next){
    if(req.query['pass']=='123456'){
        console.log('tttt');
        console.log(path.resolve('./static/1.txt'),'kikiki');
        console.log(res.sendFile,'sss')
        res.sendFile(path.resolve('./static/1.txt'));
        res.end();
    }else{
        res.sendStatus(404);
        res.end();
    }
})