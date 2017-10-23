const http = require('http'); //使用http模块进行web开发
const server = http.createServer();
const fs = require('fs');
//监听request事件  当有请求发送给server的时候就触发了request事件,然后执行回调，回调中的参数
//第一个requrest 请求对象  response 响应对象  http模块做了封装 请求报文封装到了request对象中
//有请求，必有响应，而且一次请求只能对应一次响应。
server.on('request', function (request, response) {
    //设置报文头
    //console.log(request.headers);
    console.log(request.httpVersion);
    console.log(request.method);
    console.log(request.url);
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8;abc=1'
    });

    if (request.url == '/index.html' && request.method == 'GET') {
        fs.readFile('./test.js', 'utf8', function (err, data) {
            response.end(data)
        })
    }
    //向响应报文体的报文体写内容 
    // response.write('<h1>你好你好你好</h1>');
});

//server.listen node默认3000端口
server.listen(3000);
//localhost:3000 不走网卡
//127.0.0.1:3000  走网卡
//203.35.88.XXX 通过网卡发请求给路由器或者交换机  再请求回来你的电脑


// - response.write()
// write方法用于向响应体里写内容，用于向客户端发送信息，可以被多次使用

// - response.end()
// 在一次请求和响应过程当中，只要调用了  end 就不能再继续 write 了
// 就说明你是在一次请求和响应处理过程中已经结束了响应，但是又去 向客户端发送数据
// 这个时候就会报错
// ### request
// - request.headers 请求头
// - request.method 请求方法
// - request.url 请求路径
// - request.httpVersion 请求HTTP协议版本

// ### response
// - res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
//   设置响应报文头
// - res.write('<h1>hello world</h1>');
// - res.end();



// ### request通过data事件和end事件来接收post的数据