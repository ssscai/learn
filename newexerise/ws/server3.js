const fs = require('fs');
fs.readFile('1.html', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('读取成功')
    }
});
fs.writeFile('1.txt', 'sss', function (err) {
    if (err) {
        console.log(err)
    }else{
        console.log('写入成功')
    }
})