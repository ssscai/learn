const http=require('http');
const url=require('url');//专门把url切开
const querystring=require('querystring');//解析name=ss&age=13为对象的写法

let server=http.createServer((req,res)=>{
    //get
    let {pathname,query}=url.parse(req.url,true);
    console.log('接收到了get数据',pathname,query)
    //post
    let aBuffer=[]
    req.on('data',data=>{
        console.log(data)
        aBuffer.push(data)
    })
   req.on('end',()=>{
       //urlencode
       let data=Buffer.concat(aBuffer);
       console.log(data.toString())
    //    const post=querystring.parse(data.toString())
    //   console.log(post)
   })
}).listen(8080)