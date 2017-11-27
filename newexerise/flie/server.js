const express=require('express');
const multer=require('multer');

let multerObj=multer({dest: './www/upload/'});

let server=express();
server.listen(8080);

server.use(multerObj.any());

server.post('/upload', function (req, res){
  console.log(req.files);
  res.send('ok');
});

/*
server.get('/1.txt', function (req, res){
  res.setHeader('Content-Disposition', 'attachment; filename=1.txt');
  res.sendFile('d:\\node\\www\\1.txt');
});
*/
//浏览器和服务器之间所有的通信过程是由头来控制的
// server.get('/1.txt',function(req,res){
//   res.setHeader('Content-Disposition','attachment;filename=1.txt');
//   res.sendFile('E:\\ssslearn\\learn\\newexerise\\flie\\www\\1.txt');
// })

server.use(express.static('./www/'))
