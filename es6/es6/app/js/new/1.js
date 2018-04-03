// {
//     function test(){
//         let i=0;
//         console.log(i)
//     }
//     test();
// }
'use strict'
//在es6中强制是严格模式
function aa(){
    let a=111;
    console.log(a);
    for(let i=1;i<3;i++){
        console.log(i)
    }
    console.log(i)//let声明的变量只是在自己的块级作用域内有效
}
// aa();
function last(){
    const PI=3.1415926;
    const k={
        a:1
    }
    k.a=3;
    console.log(PI,'kkkk',k)
}
last();