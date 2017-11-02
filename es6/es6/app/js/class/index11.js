//Iterator接口
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();
    //Symbol.iterator 数组内部帮我们实现  
    console.log(map.next());
    //{value: "hello", done: false}  done是否循环结束
    console.log(map.next())
    console.log(map.next())
}
{
    //自定义Iterator接口
    let obj={
        start:[1,2,3],
        end:[7,9,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    //写如何遍历的过程
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    //for。。。of背后用的就是Iterator接口
    for(let key of obj){
        console.log(key)
    }
}
{
    let arr=['hello','world'];
    for(let value of arr){
        console.log(value)
    }
}