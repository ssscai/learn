{
    //Proxy 代理  连接用户和真正对象的一个层  Reflect反射对象
    //obj 供应商 原始对象来存储真实的数据
    let  obj={
        time:'2017-11-05',
        name:'net',
        _r:123
    }
    //monitor 代理商 monitor映射obj
    let monitor=new Proxy(obj,{
        //代理对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },
        //拦截对象设置属性
        set(target,key,value){
            if(key=='name'){
                return target[key]=value;
            }else{
                return false;
            }
        },
        has(target,key){
            if(key==='name'){
                return target[key];
            }else{
                return false;
            }
        },
        deleteProperty(target,key){
            if(key.indexOf('_'>-1)){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        }

    })
   console.log('get',monitor.time);
   //只能设置name属性
   monitor.name='w3c'
   console.log('set',monitor.name);
   console.log('has','name' in monitor,'time' in monitor);
   delete monitor.time;
   console.log('delete',monitor);
}
{
    function  validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va=this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`)
                }
            }
        })
    }
    const personValidators={
        name(val){
            return typeof val==='string'
        },
        age(val){
            return typeof val==='number'&& val>18
        }
    }
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
            return validator(this,personValidators)
        }
    }
    const person=new Person('lilei',30);
    console.log(person,'person');
    person.name='zszszs';
    console.log(person,'person');
}