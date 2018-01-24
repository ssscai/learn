const koa=require('koa');
const server=new koa();
server.listen(8080);
const router=require('koa-router');
let mainRouter=router();
server.use(mainRouter.routes());
mainRouter.use('/user',require('./routes/user'))

