//数值扩展
{
    //在es6中二进制(0b/0B)和八进制(0o)
    console.log(0b110001000);
    console.log(0o767)
}
//isFinite 判断值是否有限 isNaN无限
{
    Number.isFinite(15);
    console.log(Number.isFinite(15)); //true
    console.log(Number.isFinite(NaN)); //false
    console.log(Number.isFinite(1 / 0)); //false
    Number.isNaN(NaN);
    console.log(Number.isNaN(NaN));
    console.log('0', Number.isNaN(0))
}
//isInteger 判断是否是整数
{
    Number.isInteger(25);
    console.log('isInteger-25', Number.isInteger(25));
    console.log('isInteger-25.0', Number.isInteger(25.0));
    console.log('isInteger-25.1', Number.isInteger(25.1));
    console.log('isInteger-25', Number.isInteger('25'));
}
//Number.MAX_SAFE_INTEGER 数的最大上限
//Number.MAX_SAFE_INTEGER'
{
    console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
    console.log('Number.min', Number.MIN_SAFE_INTEGER);
    console.log('isSafeInteger', Number.isSafeInteger(10));
    console.log('isSafeInteger', Number.isSafeInteger('10'))
}
//返回一个小数的整数部分  Math.trunc
{
    Math.trunc(4.345);
    console.log(Math.trunc(4.345), 'Math.trunc(4.345);')
}
//判断一个数是一个整数、负数、零
{
    console.log('-5', Math.sign(-5));
    console.log('1', Math.sign(7));
    console.log('0', Math.sign(0));
    console.log('s', Math.sign('s'));
    console.log('-9', Math.sign('-3'));
}
//关于立方根的计算
{
    console.log(Math.cbrt(8));
    console.log(Math.cbrt(-1))
}