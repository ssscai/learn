const http = require('http');
const fs = require('fs');
const url = require('url');
let httpServer = http.createServer(function (request, response) {
    // url.parse(request.url) = {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?user=blue&pass=123',
    //     query: 'user=blue&pass=123',
    //     pathname: '/reg',
    //     path: '/reg?user=blue&pass=123',
    //     href: '/reg?user=blue&pass=123'
    // }
const mysql=require('mysql');
    let db=mysql.createPool({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'root',
        database:'20171117',
        maxConnections:'20'
    })
   let {
        pathname,query
    }=url.parse(request.url, true)
    console.log(query,'query');
    let {user,pass}=query;
    console.log(user,'user',pass,'pass')
    if(pathname=='/reg'){
        //请求了注册接口
        if (!/^\w{6,32}$/.test(user)) {
            response.write(JSON.stringify({
                code: 1,
                msg: '用户名不符合规范'
            }));
            response.end();
        } else if (!/^.{6,32}$/.test(pass)) {
            response.write(JSON.stringify({
                code: 1,
                msg: '密码不符合规范'
            }));
            response.end();
        } else {
            console.log('验证成功');
            //先检查用户名是否重复
            db.query(`SELECT ID FROM user_table WHERE username='${user}'`,function(err,data){
                if(err){
                    response.write(JSON.stringify({
                        code:"1",
                        msg:'数据库有错'
                    }));
                    response.end();
                }else if(data.length>0){
                    response.write(JSON.stringify({
                        code:"1",
                        msg:'用户名已经存在'
                    }));
                    response.end();
                }else{
                    //现在才可以添加数据
                    db.query(`INSERT INTO user_table (username,password,online) VALUES ('${user})','${pass}','0')`,function(err){
                        if(err){
                            response.write(JSON.stringify({
                                code:'1',
                                msg:'数据库出错了'
                            }))
                            response.end();
                        }else{
                            response.write(JSON.stringify({
                                code:'0',
                                msg:'终于注册成功了'
                            }))
                            response.end();
                        }
                    })
                }
            })           
        }
    }else if(pathname=='/login'){
        //请求了登录接口
        if (!/^\w{6,32}$/.test(user)) {
            response.write(JSON.stringify({
                code: '1',
                msg: '用户名不符合规范1'
            }));
            response.end();
        } else if (!/^.{6,32}$/.test(pass)) {
            response.write(JSON.stringify({
                code: 1,
                msg: '密码不符合规范2'
            }));
            response.end();
        } else {
            console.log('验证成功3');
            //登录接口数据校验 用户名 密码是否对应起来
            db.query(`SElECT ID,password FROM user_table WHERE username='${user}'`,function(err,data){
                if(err){
                    response.write(JSON.stringify({
                        code:'1',
                        msg:'数据库有错，你怪我呀'
                    }))
                    response.end();
                }else if(data.length==0){
                    response.write(JSON.stringify({
                        code:'1',
                        msg:'用户名不存在呀 你是不是傻'
                    }))
                    response.end()
                }else if(data[0].password!=pass){
                    response.write(JSON.stringify({
                        code:'1',
                        msg:'密码又不正确了 你是不是傻'
                    }))
                    response.end()
                }else{
                    //登录成功的操作  先更改数据库的状态
                    console.log('登录成功')
                    db.query(`update user_table set online=1 where id=${data[0].ID}`,function(err){
                        if(err){
                            response.write(JSON.stringify({
                                code:'1',
                                msg:'数据库又错了'
                            }))
                            response.end()
                        }else{
                            response.write(JSON.stringify({
                                code:'0',
                                msg:'登录成功了'
                            }))
                            response.end()
                        }
                    })

                }
            })

        }
    }else{
        //页面发出的请求
        fs.readFile(`www${request.url}`,function(err,data){
            if(err){
                response.writeHead('404');
                response.write('not-found');
                response.end();
            }else{
                console.log('文件读取成功',data)
                response.write(data);
                response.end();
            }
        })
    }
});
httpServer.listen(9099);