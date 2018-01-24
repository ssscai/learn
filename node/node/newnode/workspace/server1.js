const express=require('express');
const server=express();
const bodyParser=require('body-parser');

server.listen(8080);

server.use(bodyParser.urlencoded({
    extended:false
}))
server.post('/',(req,res)=>{
    console.log('post',req.body)
})