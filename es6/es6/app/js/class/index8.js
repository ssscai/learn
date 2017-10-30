import 'babel-polyfill'; {
    //Symbol 数据类型  Symbol声明的变量永远是独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1, a2, 'a1=a2', a1 == a2);
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3, 'a3', a4, a3 == a4);
}
//Symbol作用：
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    }
    console.log(obj,'abc');
    for(let [key,value] of Object.entries(obj)){
        console.log(key,'key',value,'value')
    }
    //for...of 不能遍历到Symbol的声明的变量
    
    console.log(Object.getOwnPropertySymbols(obj),'Object.getOwnPropertySymbols(obj);')
    Object.getOwnPropertySymbols(obj).forEach(item=>console.log(item));
    // Reflect.ownKeys  拿到所有的值
    let items=Reflect.ownKeys(obj);
    console.log(items,'items')
}