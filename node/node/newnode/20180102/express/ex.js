var express=require('express');
app=express();
app.get('/',function(req,res){
    res.send('hello express')
})
var server = app.listen(8082, '127.0.0.1', () => {
    var host = server.address().address;
    var port = server.address().port;
    // %s表示字符串
    // %d表示number
    // %j表示json
    // %单个百分号，表示一个占位符
    console.log('实例地址:http://%s:%s', host, port)
})
app.get('/user',function(req,res){
    res.send('hello user')
})
app.get('/sss',function(req,res){
    res.send('hi sss')
})
app.use(express.static('public'))