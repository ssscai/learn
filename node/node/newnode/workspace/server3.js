const express=require('express');
const server=express();
server.listen(8080);
const mybodyParser=require('./libs/mybodyparser');
console.log(mybodyParser,'sss')
server.use(mybodyParser)
server.post('/',(req,res)=>{
    console.log('post',req.body)
})