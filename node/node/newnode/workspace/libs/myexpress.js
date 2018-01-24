const http = require('http');
const assert = require('assert');
const url = require('url');
module.exports = function () {
    let queue = [];
    let server = http.createServer(function (req, res) {
        console.log('监听到了请求');
        //1.先匹配地址  匹配到地址后进行执行
        let {pathname,query} = url.parse(req.url, true);
        req.query = query;
        // console.log(pathname,query);
        res.send = function (any) {
            //Buffer string arr json   ?????
            if (any instanceof Buffer || typeof any == 'string') {
                res.write(any);
            } else {
                res.write(JSON.stringify(any));
            }
        }
        //递归 因为有可能有异步的操作
        _run(0);
        function _run(n) {
            for (let i = n; i < queue.length; i++) {
                if (queue[i].path == pathname||queue[i].path=='*') {
                    queue[i].fn(req, res, () => {
                        _run(i + 1);
                    });
                }
                break;
            }
        }
 
    })
    server.get = function () {
        assert(arguments.length == 2 || arguments.length == 1, 'argument errror');
        let path, fn;
        if (arguments.length == 2) {
            path = arguments[0];
            fn = arguments[1];
        } else if (arguments.length == 1) {
            fn = arguments[0];
            path = '*';
        }
        // console.log(path,fn);
        queue.push({
            path,
            fn
        })
        //等有人访问的时候触发get函数 先存起来queue
    }
    return server;
}