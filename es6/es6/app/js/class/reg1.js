{
    let regex=new RegExp('xyz','i');
    let regex2=new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    let regex3=new RegExp(/xyz/ig,'i');
    //flags获取正则对象的修饰符
    console.log(regex3.flags)
}
{
    //es6中增加的修饰符
    let s='bbb_bb_b';
    let a1=/b+/g;
    let a2=/b+/y;
    console.log('a1',a1.exec(s),'a2',a2.exec(s))
    console.log('a1',a1.exec(s),'a2',a2.exec(s))
    console.log('a1',a1.exec(s),'a2',a2.exec(s))
    //是否开始y修饰符 sticky
    console.log(a1.sticky,a2.sticky);
    //.只能识别一个字节的字符
}
