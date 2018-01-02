// Buffer是node.js中的数据块，用来专门存放二进制数据的缓冲区
var buf1=new Buffer('hi world');
console.log(buf1);
console.log(buf1.write('test'))
console.log(buf1.write('张三'));//返回的是写入的字节数
var buf5 = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf5[i] = 97 + i;
}
console.log(buf5.toString('ascii', 0, 5))
var  json=buf1.toJSON();
console.log(json,'json')
//合并缓冲区
var buf2=new Buffer('sss')
var buf6=buf1+buf2;
var buf7=Buffer.concat([buf1,buf2])
console.log(buf6,'sss')
console.log(buf7,'sss');
var fs=require('fs');
fs.readFile('url.js',function(err,data){
    if(err){
        console.log('error')
    }else{
        console.log(data,'data')
    }
})