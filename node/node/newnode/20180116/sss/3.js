const Koa=require('koa');
const server=new Koa();
const path=require('path')
server.listen(8080);
// 如果网站提供静态资源（图片、字体、样式表、脚本......），为它们一个个写路由就很麻烦，也没必要。
// koa-static模块封装了这部分的请求
const static=require('koa-static');
console.log(path.join(__dirname));
const main=static(path.join(__dirname));
// server.use(main) 入口
//中间件
const mainsss=function(ctx){
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body="sssssssssssss"
}
server.use(mainsss)