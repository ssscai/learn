const express=require('express');
const server=express();
server.listen(8080);
const multer=require('multer');
const fs=require('fs');
const path=require('path');
let multerObj=multer({dest:'./upload/'});
server.use(multerObj.any())
server.post('/upload',function(req,res,next){
    // console.log(req.files)
})