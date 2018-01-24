const koa=require('koa');
const static=require('koa-static');
const router=require('koa-router')

const server=new koa();
server.listen(8080);
// 1.接口
server.use(async function(ctx,next){
    let star=new Date().getTime();
    console.log('开始')
    await next();
    console.log(`处理时间：${new Date().getTime()-star}ms`)
})
server.use(async function(ctx,next){
    console.log('第二步')
    try{
        await next();
    }catch(e){
        console.log(e.name)
    }
})
server.use(async function(){
    console.log(oDiv)
})


// 2.静态文件
server.use(static('www'))