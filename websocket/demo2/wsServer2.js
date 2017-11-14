var app=require('http').createServer();
var io = require('socket.io')(app);
app.listen(3001);
var clientCount=0;
io.on('connection',function(socket){
    clientCount++;
    socket.nickname='user'+clientCount;
    io.emit('enter',socket.nickname+'coming');
    //io.emit 广播
    //socket.emit 发送
    socket.on('message',function(str){
        io.emit('message',socket.nickname+'says:'+str)
    })
    //断开的时候
    socket.on('disconnect',function(){
        io.emit('leave',socket.nickname+'leaving')
    })
})