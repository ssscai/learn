const koa=require('koa');
const body=require('koa-better-body'); //处理post数据  koa-better-body
const convert=require('koa-convert');  //使koa-better-body模块适配当前的版本

let server=new koa();
server.listen(8080);
server.use(convert(body({
    uploadDir:'./upload',
    keepExtensions:true  //保留文件的扩展名
})));

server.use(async function(ctx){
    // console.log(ctx.request.body);//buffer
    // console.log(ctx.request.files);//文件
    // console.log(ctx)
    console.log(ctx.request.fields);//  数据(包括文件)
})
