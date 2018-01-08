var express=require('express');
var server=express();
server.listen(8080,function(){
    console.log('8080 after')
});
server.use(function(req,res,next){
    console.log('a before');
    next();
    console.log('a after')
})
server.use(function(req,res,next){
    console.log('b before');
    next();
    console.log('b after')
})
server.use(function(req,res,next){
    console.log('c before');
    next();
    console.log('c after')
})