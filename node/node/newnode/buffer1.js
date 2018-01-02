var fs = require('fs');
// fs.readFile('url.js',function(err,data){
//     if(err){
//         console.log('error')
//     }else{
//         console.log(data,'data')
//     }
// })
fs.readFile('logo1.gif', function (err, data) {
    if (err) {
        console.log('error')
    } else {
        console.log(data, 'data')
        fs.writeFile('m.gif',data,error=>{
            if(error){
                console.log('errpr')
            }else{
                console.log('完事')
            }
        })
    }
})
fs.readFile('logo1.gif', function (err, data) {
    if (err) {
        console.log('error')
    } else {
        console.log(data, 'data')
        var str=data.toString();//二进制数据不能随便转化为字符串 当为图片的时候出错
        fs.writeFile('c.gif',str,error=>{
            if(error){
                console.log('errpr')
            }else{
                console.log('完事')
            }
        })
    }
})