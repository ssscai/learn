const Koa=require('koa');
const server=new Koa();
server.listen(8080);
server.use(async function(ctx,next){
    ctx.response.body='dddd'
    await next();
    ctx.response.body+='eee';
})
server.use(async function(ctx,next){
    ctx.response.body+='kikiki';
})