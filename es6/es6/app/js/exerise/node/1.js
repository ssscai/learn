//在nodejs中有一些系统模块，require加载模块的时候会自动先去node_modules文件夹下面加载模块
//如果文件是系统模块则require的时候直接写文件名字，如果不是则要写好路径，当前路径也不能省略，否则报错
let aa=require('2');
console.log(aa.a)
let add=require('./mymath/1');
console.log(add.add(1,2),'add');
let http=require('./http');
console.log('http',http.a)