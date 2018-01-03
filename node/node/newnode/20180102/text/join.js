var path=require('path');
console.log(path.join('text','dist/1.txt'))         //text\dist\1.txt   path.join()，用于连接路径 
console.log(path.normalize('dist/haha/nor.js'))   //dist\haha\nor.js    path.normalize() 规范化路径
console.log(path.resolve('text/join.js'))           //E:\ssslearn\learn\node\node\newnode\20180102\text\text\join.js // path.resolve() 解析为绝对路径
console.log(path.relative('dist','haha/nor.js'))    //..\haha\nor.js
console.log(path.dirname('dist/haha/nor.js'));      // dist/haha
console.log(path.basename('dist/haha/nor.js'));     // nor.js
console.log(path.extname('dist/haha/nor.js'));      // .js