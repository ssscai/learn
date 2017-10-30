//对象的扩展
import 'babel-polyfill';
{
    //简洁表示法
    let a = 1;
    let b = "123";
    let es5 = {
        a: a,
        b: b
    }
    let es6 = {
        a,
        b
    }
    //console.log(es5,es6)
} 
{
    //在es6中对象中有方法的时候
    let a=1;let b="obj";let c=d;let d='sss'
    let obj = {
        a,
        b,
        [c]:'cccc',
        sayhi() {
            console.log('ok,',this.a)
        }
        
    }
    // console.log(obj,'obj')
    // console.log(obj.sayhi())
}
{
    let a="b";
    let es6obj={
        [a]:'c'
    }
    console.log(es6obj,'es6obj')
}
{
    //新增api  Object.is与===在功能上是一致的
    console.log('字符串',Object.is('abc','abc'));
    console.log('数组',Object.is([],[]))
    //Object.assign()   
    //拷贝对象 第一个参数要拷贝的对象  第二个参数把哪个对象拷贝到相应的地方
    //Object.assign  浅拷贝  只拷贝自身的可枚举的类型
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
    //
    let test={
        a:'a',
        b:'ss'
    }
    for(let [key,value] of Object.entries(test)){
        console.log(key,value)
    }
}

