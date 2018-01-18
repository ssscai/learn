const Koa = require('koa');
const fs = require('fs')
const server = new Koa();
server.listen(8080)
const main1 = function (ctx) {
    // ctx.response.body="hihihihihi"
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = {
            data: 'hello json'
        }
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = "json";
        ctx.response.body = '<p>Zhangsan<p>'

    } else {
        ctx.response.type = 'text/plain';
        ctx.response.body = 'Hello text plain'
    }
}
const main2 = function (ctx) {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template.html')
}
const main3 = function (ctx) {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html';
        ctx.response.body = '<a href="/">Index Page</a>'
    } else {
        ctx.response.body = 'zhangsan'
    }
}
// server.use(main3)
//koa-route模块
const route=require('koa-route');
const aboute=function(ctx){
    ctx.response.type='html';
    ctx.response.body='<a href="/">Index Page</a>';
}
const main=function(ctx){
    ctx.response.body='hello world sss'
}
server.use(route.get('/',main));
server.use(route.get('/aboute',aboute))