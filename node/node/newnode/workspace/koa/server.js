const koa=require('koa');
const server=new koa();
server.listen(8080);
const static=require('koa-static');
server.use(static('www'));
const route=require('koa-route');
// //:name地址里面来传参数
// server.use(route.get('/a:name',async function(ctx,next){
//     ctx.response.body='dddididi'
// }))
// //路由参数:直接给中间件函数加参数ctx,参数1，参数2，....next
// server.use(route.get('/reg/:user/:pass',async function(ctx,user,pass,next){
//     ctx.response.body='reg';
//     console.log(user,pass)
// }))
//1.get数据的接收：?后面的参数的接收  ctx.request.query
// server.use(route.get('/reg',async function(ctx,next){
//     console.log(ctx.request.query)
// }));
const router=require('koa-router');
const r1=router();
server.use(r1.routes());
r1.get('/a/:id/:page',async function(ctx,next){
    console.log(ctx.params)
    //ctx.params
    ctx.response.body='222'
})
r1.get('/b',async function(ctx,next){
    ctx.response.body='333'
})
