
const fs=require('fs');
module.exports=function(req,res,next){
    var arr=[];
    // 客户端ip
    // console.log(req.connection)
    //时间
    let oDate=new Date();
    //oDate.toGMTString();
    arr.push(oDate.toGMTString());
    arr.push(req.method);
    arr.push(req.url)
    //地址
    fs.appendFile('logs/acess.log',arr.join(' ')+'\n',err=>{
        if(err){
            console.log(err)
        }
        next();
    })
}