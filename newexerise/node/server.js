const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const mysql = require('mysql');
const url = require('url');
//url模块用来解析url的
//连接数据库
let db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: '20171117',
    maxConnections: '20'
});
let httpServer = http.createServer(function (req, res) {
    console.log('sss', req.url)
    //  reg?user=blue&pass=xxx
    let {
        pathname,
        query
    } = url.parse(req.url, true);

    if (pathname == '/reg') {
        //请求了注册   
        console.log('请求了注册');
        let {
            username,
            pass
        } = query;
        console.log(query,'user')
        //1.先来判断数据 后台校验数据特别重要 2.数据是否重复  3.往数据库中插入数据
        if (!/^\w{6,32}$/.test(username)) {
            res.write(JSON.stringify({
                code: 1,
                msg: '用户名不符合规范'
            }));
            res.end();
        } else if (!/^.{6,32}$/.test(pass)) {
            res.write(JSON.stringify({
                code: 1,
                msg: '密码不符合规范'
            }));
            res.end();
        } else {
            //2.数据是否重复   select

            db.query(`SELECT ID FROM user_table WHERE username='${username}'`, function (err, data) {
                if (err) {
                    res.write(JSON.stringify({
                        code: 1,
                        msg: '数据可有错'
                    }));
                    res.end()
                } else if (data.length > 0) {
                    //data服务器返回的数组
                    res.write(JSON.stringify({
                        code: 1,
                        msg: '此用户名已经存在'
                    }));
                    res.end()
                } else {
                    db.query('SELECT username FROM user_table',function(err,data){
                        if(err){
                            console.log(err)
                        }else{
                            console.log('success'+JSON.stringify(data))
                        }
                    })
                    //3.往数据库中插入数据
                    console.log(`${username}`,'ssss',`${pass}`)
                    db.query(`INSERT INTO user_table (username,password) VALUES ('${username}','${pass}')`, function(err){
                        if(err){
                          res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
                          res.end();
                        }else{
                          res.write(JSON.stringify({code: 0, msg: '注册成功'}));
                          res.end();
                        }
                      });
                }
            })
        }
    } else if (pathname== '/login') {
        //请求登录接口
        console.log('请求了登录');
        let {
            username,
            pass
        } = query;
        //校验数据

            //取数据
            db.query(`SELECT ID from user_table WHERE username='${username}'`,function(err,data){
                if(err){
                    res.write(JSON.stringify({
                        code:1,
                        msg:'数据库有错'
                    }))
                    res.end();
                }else if(data.length==0){
                    res.write(JSON.stringify({
                        code:1,
                        msg:"用户名不存在"
                    }))
                    res.end();
                }else {
                    db.query(`UPDATE user_table SET online=1 WHERE ID=${data[0].ID}`, err=>{
                        if(err){
                          res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
                          res.end();
                        }else{
                          res.write(JSON.stringify({code: 0, msg: '登陆成功123'}));
                          res.end();
                        }
                      });
                }
                
            })
        
    } else {

        fs.readFile(`www${req.url}`, (err, data) => {
            console.log('1111')
            if (err) {
                console.log('2222')
                res.writeHead('404');
                res.write('not-found');
                res.end();
            } else {
                console.log('33333')
                res.write(data);
                res.end();
            }
        })
    }

});
httpServer.listen(9099);