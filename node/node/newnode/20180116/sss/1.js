const Koa=require('koa');
const server=new Koa();
server.listen(8080);
//Context 简写ctx 表示一次对话的上下文（包括http请求和响应)
server.use(function(ctx){
    ctx.response.body='hello world'
})