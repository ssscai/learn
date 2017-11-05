import 'babel-polyfill';
{
    //set map
    //类似于数组，但是成员的值都是唯一的，没有重复的值。
    let list=new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
}
{
    let arr=[1,2,3,4,5];
    let list=new Set(arr);
    console.log('size',list.size);
}
{
    let list=new Set();
    list.add(1);
    list.add(2);
    list.add(1);//不生效
    console.log('size',list,list.size);
}
{
    //去重
    let arr=[1,2,3,1,2,1];
    let list2=new Set(arr)
    console.log('size',list2,list2.size);
}
{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear()
    console.log('clear',list)
}
{
    //Set 结构没有键名，只有键值（或者说键名和键值是同一个值）
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
    for(let key of list){
        console.log('key',key)
    }
    for(let [key,value] of list.entries()){
        console.log('key',key,'value',value)
    }
    list.forEach(function(item){
        console.log(item,'item')
    })
}
{
    //WeakSet 与Set支持的数据类型不一致   WeakSet 必须为对象
    //WeakSet 结构有以下三个方法。
// WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
// WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
    let weaklist=new WeakSet();
    let arg={};
    weaklist.add(arg);
    //weaklist.add(2);//Invalid value used in weak set
    console.log(weaklist,'weaklist');//不能遍历 没有set属性 clear方法
}
{
    //Map本质上是键值对的集合    添加元素用set  Set添加元素用add
    let map=new Map();
    let arr=['123'];
    map.set(arr,'456');
    console.log(map,'mapmap',map.get(arr))
}
{
    //第二种定义方法 接收一个数组
    let map=new Map([['a',123],['b',456]]);
    console.log(map,'mapmap',map.size)
}
{
    //WeakMap 键值对的集合  其中的key必须为对象
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o))

}

{
    //may和array对比数据结构 增删改查
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({t:1});
    console.info('map-array',map,array);
    //查
    let map_exist=map.has('t');//true ,false
    let array_exist=array.find(item=>item.t);//返回的是当前的对象
    console.log(map_exist, array_exist);
    //改
    map.set('t',2);
    array.forEach(function(item){
        return item.t?item.t=2:''
    })
    console.log(map,array);
    //删除
    map.delete('t');
    //splice  查索引
    let index=array.findIndex(item=>item.t);
    console.log(index,'index');
    array.splice(index,1);//删除元素
    console.log(map,'sss',array)
}
{
    //map 和 array对比
    let set=new Set();
    let array=[];
    //增
    set.add({t:1});
    array.push({t:1});
    console.log(set,array);
    //查
    let set_exist=set.has('t');
    let array_exist=array.find(item=>item.t);//返回的是当前的对象
    console.log(set_exist,array_exist);
    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log(set,array);
    //删除
    set.forEach(item=>item.t?set.delete(item):'');
    array.forEach(item=>item.t?set.delete(item):'');
    console.log(set,array);
}
{
    let item={
        t:1
    }
    let map=new Map();
    let set=new Set();
    let obj={}
    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.log(map,set,obj);
    //查询
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })
    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2
    console.log(map,set,obj);
    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map,set,obj);
    //总结 能使用map不使用数组  唯一性set 放弃使用数组 对象
}
