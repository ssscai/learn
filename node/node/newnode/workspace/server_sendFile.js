const express=require('express');
const server=express();
const path=require('path');
server.listen(8080);
server.get('/1.txt',function(req,res,next){
    if(req.query['pass']=='123456'){
        console.log(path.resolve('./static/1.txt'),'kiki')
        console.log(__dirname + '\\static\\1.txt')
        res.sendFile(__dirname + '\\static\\1.txt');//?????????
        res.end();
    }else{
        res.sendStatus(404,'hihi-----not');
        res.end();
    }
})