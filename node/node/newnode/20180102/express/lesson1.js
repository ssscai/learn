var express=require('express');
var server=express();
var bodyParser=require('body-parser')
server.listen(8090);
server.use(bodyParser.urlencoded({extended:false}))
server.post('/',function(req,res){
    console.log(req.body)
})


// const express=require('express');
// const bodyParser=require('body-parser');

// let server=express();
// server.listen(8080);

// server.use(bodyParser.urlencoded({extended: false}));

// server.post('/', (req, res)=>{
//   console.log(req.body);
// });