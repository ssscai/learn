const koa=require('koa');
const static=require('koa-static');

let server=new koa();
server.listen(8080);


server.use(async function(ctx){
    console.log(ctx.req.query);     //undefined req: 原生的 no query 
    console.log(ctx.request.query)  //request koa封装过的 更好用
    // console.log(ctx.request.path)
})
