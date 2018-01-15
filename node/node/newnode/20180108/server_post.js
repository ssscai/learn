var express=require('express');
var bodyParser=require('body-parser')
var server=express();
server.listen(8080);
server.use(bodyParser.urlencoded({extended:false}))
server.post('/',function(req,res){
    // res.send('post')
    // res.send(res)
    console.log(req)
    console.log(req.body)
})