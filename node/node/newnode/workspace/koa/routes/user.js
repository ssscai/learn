const router=require('koa-router');
const r1=router();
r1.get('/a',async function(ctx,next){
    ctx.response.body="aaa"
})

r1.get('/b',async function(ctx,next){
    ctx.response.body="bbb"
})
module.exports=r1.routes();