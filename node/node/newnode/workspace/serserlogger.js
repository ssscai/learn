const express=require('express');
const server=express();
server.listen(8080);
const myLogger=require('./libs/mylogger');
server.use(myLogger);
server.post('/',(req,res,next)=>{
    console.log(req.body)
})