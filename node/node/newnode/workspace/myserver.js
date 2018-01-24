const myexpress=require('./libs/myexpress');
const myserver=myexpress();
const logger=require('./libs/mylogger');
myserver.listen(8080);
myserver.get(logger);
myserver.get('/',function(req,res,next){
    console.log('abc');
    next();
})
myserver.get('/',function(req,res,next){
    console.log('ddd');
    res.send('hi yyy');
    res.end();
})