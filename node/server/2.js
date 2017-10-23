var http = require('http');
var server = http.createServer();
var fs = require('fs');
server.on('request', function (request, response) {
    console.log(request.url, request.method);
    if (request.url == '/index.html' && request.method == 'get') {
        console.log('ststst')
        // fs.readFile('./1.js', 'utf8', function (err, data) {
        //     request.end(data)
        // })
    }
    // response.write('123')
});
server.listen(3000);