var base = require('./base');
console.log(base(1, 2), 'base');
//node  读文件
var fs = require('fs');
fs.readFile('./base.js', 'utf8', function (err, data) {
    //err静止状态 不会阻止代码
    //console.log(data)
});
//readFile异步读文件 readFileSyac()同步读文件
fs.access('./base.js', function (err, data) {
    if (err) {
        console.log(err)
    }

});
//access是文件是否存在 是同步的操作，而readFile是异步的操作  程序先执行同步再执行异步。
var rf = require('./foo/path1').rf;
// rf('./foo.text', function (data) {
//     console.log(data)
// })
var fd = require('./foo/path1').fd;
// fd(function (data) {
//     console.log(data)
// })
try {
    fs.accessSync('./base.js')
} catch (e) {
    console.log('1' + e)
}
var error = new Error('这是一个错误');
error.code = 123;
//console.log(error,'error');
//writeFile写文件：第一个参数路径，第二个参数内容，第三个参数编码格式，第四个内容回调
fs.writeFile('./hi.js', 'hell0123124', 'utf8', function (err) {
    console.log(err, 'err')
})
fs.mkdir('./c.js', function (err) {
    console.log(err)
});
//fs.stat() 判断文件、文件夹属性
