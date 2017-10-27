// 数组扩展
{
    //Array.of把一组数据变量保存为数组
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log(arr, 'arr');
    let empty = Array.of();
    console.log(empty) //[]
} {
    //Array.from把一些伪数组或者集合转为真正的数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        //获得元素的文本内容：
        console.log(item.textContent)
    })
    console.log(Array.from([1, 2, 3], function (item) {
        return item * 2
    }))
}

//fill数组填充替换
{
    console.log('fill-7', [1, 'a', 'undefined'].fill(7));
    console.log('fill,pos', ['a', 'b', 'c', 'd', 'e'].fill(7, 1, 4))
} 
//keys 索引  键
{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index)

    }
}
//values有兼容性问题 values 值
import 'babel-polyfill';
{
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('value', value)

    }
}

//entries没有兼容性问题 有索引和值
{
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('index',index,'value',value)
    }
}

{
    //在当前数组内部 复制到指定位置
    console.log([1,2,3,4,5,6,7,4].copyWithin(0,3,6));
    //copyWithin 第一个参数：从哪个位置开始替换
    //第二个参数：从哪个位置读取数据
    //第三个参数：从哪个位置截止
}
//查找 find只找到第一个满足条件的值
{
    console.log([1,2,3,4,5,6].find(function(item){
        return item>3;
    }))
    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item>3;
    }))
}
//includes()
{
    console.log('number',[1,2,NaN].includes(1))
}