var express=require('express');
var server=express();
server.listen(8080,function(){
    console.log('lister after')
})
server.get('/',function(req,res){
    res.send('我是get')
})
server.post('/',function(req,res){
    res.send('post')
})
//
server.use(express.static('./www'))