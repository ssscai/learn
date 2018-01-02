var fs=require('fs');
// __filename 全局变量，存储的是文件名 E:\ssslearn\learn\node\node\newnode\20180102
// __dirname 全局变量，存储的是文件所在的文件目录  E:\ssslearn\learn\node\node\newnode\20180102\stream.js
console.log(__dirname,'_dirname',__filename,"_filename");
//传统写法
fs.readFile(__dirname+'/sss.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        fs.writeFile(__dirname+'/ssscopy.txt',data,function(err){
            if(err){
                console.log(err)
            }else{
                console.log('copy success')
            }
        })
    }
})
// stream写法
var rs=fs.createReadStream(__dirname+'/sss.txt');
var ws=fs.createWriteStream(__dirname+'/ssssteamcopy.txt');
rs.on('data',function(m){
    ws.write(m);
    console.log('read')
})
rs.on('end',function(){
    ws.end();
    console.log('end')
})
