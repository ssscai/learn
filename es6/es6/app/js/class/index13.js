import 'babel-polyfill';
{
    //修饰器 decorators：是个函数 用来修改类的行为  修饰器就是对类就行修饰 
    //限制某个属性是只读的
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }
    class Test {
        //@readonly
        time() {
            return '2017-11-03'
        }
    }
    let test = new Test();
    test.time = function () {
        console.log('reset timesssss')
    }
    console.log(test.time());
    //Cannot assign to read only property 'time' of object '#<Test>'
}

{
    //基本用法：
    //修改器在 面向对象中有更多的选择  怎么让类应用更加灵活  代码复用性是一种非常好的方式
    let typename=function(target,name,descriptor){
        target.myname='hello world';
        //myname类的静态属性 通过类来访问
    }
    @typename class Test{

    }
    console.log('修饰器',Test.myname);
    //第三方库 包含常规的修饰器 core-decorators
}
{
    //实用案例
    let log=function(type){
        return function(target,name,descriptor){
            console.log(target,'target',name,'name')
            console.log(descriptor,'descriptor')
            let src_method=descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                console.log(`log ${type}`)
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('AD is show')
        }
        @log('click')
        click(){
            console.info('AD is click')
        }
    }
    let ad=new AD();
    ad.show();
    ad.click()
    
}