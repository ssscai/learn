const express=require('express');
const server=express();
server.listen(8080);
// 开始
const querystring=require('querystring');
server.use(function(req,res,next){
    let str='';
    req.on('data',data=>{
        str+=data;
    })
    req.on('end',()=>{
        console.log(str,'str')
        console.log(querystring.parse(str))
        req.body=querystring.parse(str);
        next();
    })
})
//结束
// 相当于=======》
// const bodyParser=require('body-parser');
// server.use(bodyParser.urlencoded({extended:false}))
server.post('/',(req,res)=>{
    console.log('post',req.body)
})