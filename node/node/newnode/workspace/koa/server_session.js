const koa=require('koa');
const server=new koa();
const session=require('koa-session');
server.listen(8080);

server.keys=['ki123','sss456']
server.use(session({
    maxAge:20*60*1000
},server))
server.use(async function(ctx){
    console.log(ctx.session)
    if(!ctx.session['n']){
        ctx.session['n']=1;
    }else{
        ctx.session['n']++;
    }
    ctx.response.body=`你是第：${ctx.session['n']} 次访问`
})