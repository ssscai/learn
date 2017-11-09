function test(){
    let a=1;
    var b=2;
    console.log(a,b);
    for(let i=1;i<3;i++){
        console.log(i,'i')
    }
    // let c=3;
    // var c=3;
}
test();
// 如何区分块作用域：大括号就是个块{}
//es6是强制开启了严格模式 "use strict" 严格模式变量没有声明不能使用,否则报错
function last(){
    const PI=3.1415926;
    //PI=8;
    console.log(PI)
    const k={
        a:1
    }
    k.b=3
    console.log(k,'kkkkkk')
}
console.log('sssimi')
last();
//常量的含义是不能修改的，只读属性，不能修改.变量用const声明的时候必须赋值
//存储的是数值 不能修改。存储的是对象的话 可以修改。所以使用const的时候一定要注意
//解构赋值：解构左边一种解构 右边一种解构  左右一一对应进行赋值。
