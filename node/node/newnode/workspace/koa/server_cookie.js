const koa=require('koa');
const server=new koa();
server.listen(8080);
server.keys=['ssssded','kiki123']
server.use(async function(ctx){
    // cookie是子级可以拿父级的   父级不能拿子级的  path指定路径 一般不写
    //ctx.cookies.set('zs','sss',{maxAge:1000*3600*2,path:'/aaa'})
    ctx.cookies.set('zs','kiki',{maxAge:1000*3600*2,signed:true})
    let get_cookie=ctx.cookies.get('zs',{signed:true});
    console.log(get_cookie)
})