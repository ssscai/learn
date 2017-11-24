const http=require('http');
const fs=require('fs');
const mysql=require('mysql');
const io=require('socket.io');
//首先创建http服务
let httpServer=http.createServer();
httpServer.listen()