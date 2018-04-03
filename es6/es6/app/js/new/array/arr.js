{
    // /Array.of用法：将一组值转化为数组 不传则为空数组,为了弥补数组，
    //当参数个数》=2时，Array才会返回由参数组成的数组
    //Array(3)=>[,,,]而 Array.of(3)=>[3]
    let arr=Array.of(3,4,7,8);
    console.log(arr);
    let empty=Array.of();
    console.log(empty);
    let arrone=Array.of(3);
    console.log(arrone)//[3]
}
{
    let p=document.getElementById('box').querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent) ;
    })
    console.log(Array.from([1,3,5],function(item){
        return item*2;
    }))
}
{
    console.log('fill',[1,'a',undefined].fill(7))
    //第二个参数是替换的起始位置  第三个参数是替换的结束为止
    console.log('fill',[1,'a',undefined].fill(7,1,2))
}
{
    for(let index of [1,'c','adb'].keys()){
        console.log('keys',index)
    }
    //values  不兼容 
    // for(let index of [1,'c','adb'].values()){
    //     console.log('keys',index)
    // }

    for(let [index,value] of [1,'c','adb'].entries()){
        console.log('entries',index,value)
    }
}
{
    console.log([1,2,3,4,5].copyWithin(0,2,4))
}
{
    console.log([1,2,3,4,5,6].find(function(item){
        return item>3;
    }))
    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item>3;
    }))
}
{
    console.log('number',[1,2,NaN].includes(1))
    console.log('number',[1,2,NaN].includes(NaN))
}