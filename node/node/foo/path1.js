var fs = require('fs');

var rf = function (path, cb) {
    fs.readFile(path, 'utf8', function (err, data) {
        cb(data)
    })
}
var fd = function (cb) {
    fs.readFile(__dirname + '/foo.text', 'utf8', function (err, data) {
        console.log(__dirname, 'dirname');
        //__dirname 当前文件的根路径
        if (err) {
            //throw err;
        }
        //处理异常比价重要，异常？计算机不能处理的状况，称之为异常。异步代码异常是err对象。同步代码则阻止程序进行
        //同步代码没有callback.同步代码中需要大量使用 try{}catch(e){}，可以捕获异常，不会阻止程序的进行。
        cb(data)
    })
}
module.exports = {
    rf: rf,
    fd: fd
}