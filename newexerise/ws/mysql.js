var mysql=require('mysql');//node的模块
//客户端 所以链接到服务器   createConnection创建一个连接
//创建多个连接  连接池 共享 用完后还过来
let db=mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'20171114',
    maxConnections:'20'
});
//数据库的语言 SQL  增删改查 CRUD  异步
db.query('SELECT username FROM user_table',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('成功了',data);
        console.log('success'+JSON.stringify(data))
    }
})