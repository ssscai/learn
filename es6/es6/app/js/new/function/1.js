{
    function test(x,y='sss'){
        console.log(x,y)
    }
    test('hi')
}
{
    let x='sss'
    function test(x,y=x){
        console.log(x,'kkkk',y)
    }
    test('hi你好你好你好');
    //调用时函数内部的变量x已经生成，所以y等于参数x而不是全局x
}
{
    let x='sss'
    function test(y=x){
        console.log(x,'kkkk',y)
    }
    //test();
}
{
    
    function test(yy=xx){
        let xx=2;
        console.log(xx,'kkkk',yy)
    }
    //test();// 报错x is not defined
}
{
    function zs(x,y,z){
        console.log(arguments[0])
        console.log(arguments)
    }
    zs(1,2,3)
    /******************************/ 
    var length = 10;
    function fn(){
        alert(this.length)
    }
    var obj = {
        length: 5,
        method: function(fn) {
            arguments[0]
            console.log(arguments[0])
        }
    }
    //arguments = {
    //     0: fn, //也就是 functon() {alert(this.length)} 
    //     1: 第二个参数, //没有 
    //     2: 第三个参数, //没有
    //     ..., 
    //     length: 1 //只有一个参数
    // }
    obj.method(fn)
}
{
    console.log('a',...[1,2,4]);
    var arrarr=[[1,2,3,4],[5,6,7,8]];
    console.log([...[1,2,3],...[4,5,6]])
    console.log(...[...[1,2,3],...[4,5,6]]);
    var arr1=[1,2,3,4];
    var arr2=[7,8,9];
    var arr3= arr1.concat(arr2);
    console.log(...arr3)
}
{
    function add(...values){
        let sum=0;
        console.log(values,'values')
        for(var val of values){
            sum+=val;
        }
        return sum;
    }
    console.log(add(1,2,3))
}
{
    function addtest(fn,zzz){
        console.log(arguments[0],'sss',arguments[1])
        fn();
    }
    addtest(function(zzz){
        console.log('sss')
    },'222')
}
{
    //箭头函数

    var arrow=v=>v*2;
    
    console.log(arrow(2))
}
{
    console.log(Object.assign({a:1},{b:2}))
}
{
    //Proxy  obj供应商 原始对象 对用户来说不可见
    let obj={
        time:'2017-03-30',
        name:'net',
        _r:123
    }
    //代理商

    let monitor=new Proxy(obj,{
        //代理的东西,拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },
        set(target,key,value){
            if(target[key]=='name'){
                return target[key]=value;
            }else{
                return target[key]
            }
        }    
    })
    monitor.name='123'
    console.log('get',monitor.name)
}