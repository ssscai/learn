{
    let a,b,rest;
    [a,b]=[1,2];
    //console.log('a=',a,'b=',b);
}
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6]
    //console.log('a=',a,'b=',b,'rest=',rest);
    //解构赋值的特性
}
{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log(a,b)
}
{
    let a,b,c,rest;
    [a,b,c]=[1,2];
    //没有配对成功的时候是undefined
    console.log(a,b,c);
    [a,b,c=3]=[1,2];
}
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    //轻松实现变量交换
    console.log(a,b,'交换')
}
{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b,'函数函数')
}
{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b,'....');
    //数组解构的赋值匹配模式
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b]=f();
    //只关心第一个  别的放在一个数组中
    console.log(a,b,'....');
}
{
    let o={
        p:42,
        q:true
    }
    let {p,q}=o;
    console.log(p,q,'对象解构赋值')
}

{
    let {a=10,b=5}={a:3};
    //对象解构赋值默认值的处理
    console.log(a,b,'覆盖')
}
//json 对象
{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            describe:'describe'
        }]
    }
    let {title:estitle,test:[{title:cntitle}]}=metaData;
    console.log(estitle,'estitle',cntitle,'cntitle');
    //对象和数组的嵌套
}
