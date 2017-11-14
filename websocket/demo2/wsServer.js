var app = require('http').createServer()
var io = require('socket.io')(app);


app.listen(3000);

io.on('connection', function (socket) {
    //socket 代表与客户端的连接
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});