{
    function test(x, y = 'world', z = "zs") {
        console.log('默认值', x, y, z)
    }
    test('hello');
    test('hello', 'hihi');
    //默认值后面不能有 没有默认值的变量  除非z有默认值
}

{
    let x = "test";
    function test2(x, y = x) {
        console.log('作用域', x, y)
    }
    test2('kill')
}
{
    //res参数
    function test(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
        console.log(arg)

    }
    test(1,2,3,4);
    //...arg参数作用：把一系列的参数转化为数组
}
{
    console.log('a',...[1,2,4]);
    // ...[1,2,4]  ...取数组中的值
}

{
    //箭头函数  当参数只有一个的时候可以省略（） 
    //当返回值只有一个语句的时候可以省略{}
    let arrow=v=>v*2;
    console.log(arrow);
    let arrow1=(v1,v2)=>v1+v2;
    let arrow2=(v1,v2,v3)=>{
        return v1+v2+v3
    }
    console.log(arrow1);
    console.log(arrow2);
    let arrow3=()=>{
        console.log('arrow3')
    }
    console.log(arrow3);
    //注意this绑定
}
{
    //尾调用：存在于函数式编程
    function tail(x){
        console.log('tail',x)
    }
    function fx(x){
        return tail(x);//最后一步的作用是提升性能   最后一步语句是函数
    }
    fx(123);
}