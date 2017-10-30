//  babel-polyfill处理兼容性的 有些方法是es7中
import 'babel-polyfill';
{
    console.log('a','\u0061');
    //当码值大于两个字节的时候
    console.log('s','\u20BB7');
    //'\u20BB7'因为：'\u20BB7大于0xFFFF;
    //当作两个字符 在es6中如何处理字符大于0xFFFF;
    console.log('s','\u{20BB7}');
    var s='𠮷';
}
{
    let s='𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));//某个位置的字符
    console.log('0',s.charCodeAt(0));//第一个字符的unidecode码值 charCodeAt取两个字节
    console.log('0',s.charCodeAt(1));//第二个字符的unidecode码值
    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0).toString(16));//es6中的处理 codePointAt取字符的码值 用四个字节存储的
    console.log('code1',s1.codePointAt(1))
    console.log('code2',s1.codePointAt(2))
}
{
    console.log(String.fromCharCode('0x20bb7'));//es5
    console.log(String.fromCodePoint('0x20bb7'));//es6 区别是能否争取输出unide字符
}
{
    //字符串遍历器
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
    //let...of可以处理unicode 大于oxFFFF;的
}
{
    //判断字符串
    let str="string";
    console.log('include--r',str.includes("r"));
    console.log('include--c',str.includes("c"));
    console.log('star',str.startsWith('str'));
    console.log('end',str.endsWith('str'));
}
{
    let str="abc";
    console.log(str.repeat(2))
}
{
    let name="sssinfomimi";
    let info="helloworld";
    let m=`i am ${name} ${info}`;
    console.log(m)
}
{
    console.log('12'.padStart(4,'0'));//padStart 补白的作用  在前面补
    console.log('321'.padEnd(4,'0'));//padEnd在后面补
}
{
   let user={
       name:'hello',
       info:'world'
   } 
   //标签模板  防止xss攻击   方便处理
   console.log('llll', abc(`i am ${user.name} ${user.info}`));
   abc(`i am ${user.name} ${user.info}`);
   function abc(s,v1,v2){
       console.log('inner',s,v1,v2)
        return s+v1+v2;
   }
}
{
    //String.raw  \n没有生效   String.raw 在斜杠前面进行了转义  前面又加了一个\
    console.log(String.raw`hi\n3`);
    console.log(`h3\n3`);
}