const fs=require('fs');
let rs=fs.createReadStream('www/1.html');
let ws=fs.createWriteStream('www/s.html.gz');
const zlib=require('zlib');
let gz=zlib.createGzip();

rs.pipe(ws);//读取流站主导地位
rs.pipe(gz).pipe(ws)
// rs.on('error',function(){
//     console.log('读取失败')
// })
// rs.on('end',function(){
//     console.log('读取失败')
// })
// ws.on('error',function(){
//     console.log('写入失败')
// })
// ws.on('finish',function(){
//     console.log('finish')
// })