//类和对象

//基本定义和生成实例 class 类名{}
{
    class Parent{
        constructor(name,age='18'){
            this.name=name;
            this.age=age;
        }
    }
    let chlid=new Parent('sss');
    //console.log(chlid,'child')
}
{
    class Parent{
        constructor(name='li'){
            this.name=name;
        }
    }
    class Child extends Parent{
        constructor(name="124",sex,pro){
            super(name);//在子类中用父类的属性
            this.sex=sex;
            this.pro=pro;
        }
    }
    let child=new Child()
    console.log(child,'child')
}

{
    class Parent{
        constructor(name="learn"){
            this.name=name;
        }
        //longName  是属性而不是方法
        get longName(){
            return 'mk'+this.name
        }
        set longName(value){
            this.name=value;
        }
    }
    let v=new Parent();
    console.log('v',v.longName)
    v.longName='hello';
    console.log('set',v.longName)
}
{
    //静态方法： 通过类去调用 而不是通过类的实例去调用
    class Parent{
        constructor(name='zs'){
            this.name=name;
        }
        static tail(){
            console.log('tail')
        }
    }
    Parent.tail();
}
{
    //静态属性
    class Parent{
        constructor(name='zs'){
            this.name=name;
        }
        static tail(){
            console.log('tail')
        }
        //static只是用来定义静态方法
       
    }
    //定义静态方法是在类上面直接定义 跟对象没有关系
    Parent.type='test';
    console.log('静态属性', Parent.type)
}