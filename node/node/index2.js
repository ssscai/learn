//promise异步流程控制解决方案  因为异步的callback嵌套层级太多  嵌套地狱
//异步流程--->回调函数的嵌套
//异步流程控制---->用同步的方式去写异步的代码 
//.then()就是promise的语法
var fs = require('fs');
// 
var rf = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile('./hi.js', 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })
}
rf().then(function (data) {
    //成功
    console.log(data,'then///////////////////')
}, function (err) {
    //失败
    console.log(err)
})
//then 把成功失败拆开了
//node  异步去处理高并发的容器
//Node，不需要服务器容器。Node是一个面向网络而生的平台。Node的目标就是成为一个构建快速、可伸缩的网络应用平台。
//每一个Node进程构成网络应用中的一个节点。这就是 Node 的含义。


