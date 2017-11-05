//正则 处理字符串的东西
{
    let str = "abcdefg";
    let pos = str.search('c');
    console.log(pos, 'pos');
    //substring字符串截取 不包括结束位置
    console.log(str.substring(2, 6));
    console.log(str.substring(2));
    console.log(str.charAt(2));
    //split字符串的切分
    let mm = 'aa-bb-11-22-33'
    console.log(mm.split('-'));

} {
    //find ./ -name *.txt
    //REGXP对象  两个方法实例化对象：字面量 
    var reg = /\bis\b/g;
    var str = 'People is Daily Online is focisuses on China news, China society, China military';
    // var mstar=str.replace(reg,'ISIS');
    // console.log(mstar,'mstar');
    //构造函数
    var regs = new RegExp('\\bis\\b', 'g');
    str.replace(reg, 'Ie');
    console.log(str, 'str');
    //修饰符：
    //g:global全文搜索。不添加，搜索到第一个匹配的停止。
    //i:ignore case忽略大小写，默认大小写敏感
    //m:多行搜索
    var mi = 'He is a boy,Is he?'.replace(/\bis\b/gi, '0');
    console.log(mi, 'mi');
    //元字符 正则表达式有两种基本字符类型组成：原义文本字符和元字符
    //元字符是在正则表达式中有特殊含义的非字母字符
    // \t水平制表符  \v垂直制表符 \n换行 \r回车符 \0空字符  \f换页符
    //字符类
    //一般情况下正则表达式一个字符对应字符串一个字符
    //表达式ab\t的含
    /*字符类*/
    //我们可以使用元字符[]来构建一个简单的类  所谓类是指符合某些特性的对象。一个泛指，而不是特指某个字符。
    //表达式[abc]把字符a或者b或者c归为一类，表达式可以匹配这类的字符。
    var str1 = 'a1b2c3d4';
    var star2 = str1.replace(/[abc]/g, 'X');
    console.log(star2);
    //字符类取反：使用元字符^创建反向类/负向类  反向类的意思是不属于某类的内容 [^abc]表示不是字符a或者b或者c的内容
    var str3 = str1.replace(/[^abc]/g, 'X');
    console.log(str3);
    //范围类 
    var str4 = 'a1b2d3x4z9'.replace(/[a-z]/g, 'Q');
    console.info(str4);
    //在[]组成的类内部是可以连写的 [a-zA-Z]
    var str5 = 'a1b2d3x4z9A4B7'.replace(/[a-zA-Z]/g, 'Q');
    console.info(str5);
    var str6 = '2017-11-03'.replace(/[0-9]/g, 'A');
    var str7 = '2017-11-03'.replace(/[0-9-]/g, 'A');
    console.log(str6, 'str6', str7)
    //预定义类
    //.<=>[^\r\n]  除了回车符和换行符之外的所有字符。
    //\d [0-9]数字字符
    //\D [^0-9]非数字字符
    //\s [\t\n\xOB\f\r] 空白符
    //\S [^\t\n\xOB\f\r] 非空白符
    //\w [a-zA-Z_0-9] 单词字符
    //\W [^a-zA-Z_0-9] 非单词字符
    //ab[0-9][^\r\n] ab\d.
    //常用的边界字符： ^以XXXX开始 $以XXXX结束 \b单词边界 \B非单词边界
    var str8 = 'This is a boy'.replace(/is/g, '0');
    console.log(str8, 'str8'); //Th0 0 a boy str8
    var str9 = 'This is a boy'.replace(/\bis\b/g, '0');
    console.log(str9, 'str9'); //This 0 a boy str9
    var str10 = '@123@abc@123'.replace(/^@./g, 'Q');
    console.log(str10, 'str10');
    var str11 = '@123\n@456\n@903'.replace(/^@\d/gm, 'X')
    console.log(str11, 'str11');
}

{
    //量词
    //?出现零次或者一次   + 出现一次或者多次  *出现零次或者多次(任意次)
    //{n}出现n次 {n,m} 出现n到m次  {n,}至少出现n次
    // \d{20}
    //js正则贪婪模式（默认）
    //非贪婪模式：让正则表达式尽可能少的匹配，也就是说一旦成功匹配不再继续尝试就是非贪婪模式  做法很简单在量词后面加上？即可
} 
{
    //分组  使用（）可以达到分组的功能，使量词作用于分组。(byron){3}
    var str12 = 'a1b2c3d4'.replace(/([a-z]\d){3}/g, 'X');
    console.log(str12, 'str12');
    //或 |
    var str13 = 'ByronsperByrCasper'.replace(/Byr(on|Ca)sper/g, 'X');
    console.log(str13, 'str13')
    //反向引用
    //$1,$2,$3匹配的是分组的数据
    var str14 = '2017-11-03'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1');
    console.log(str14, 'str14');
    //忽略分组  只需要在分组内加?:
    //前瞻   正则表达式从文本头部向尾部开始解析，文本尾部方向，成为‘前’
}
{
    //对象属性
    //lastIndex：当前表达式匹配 内容的最后一个字符的下一个位置
    //source:正则表达式的文本字符串
    //RegExp.prototype.test(str)  用于测试字符串参数中是否存在匹配正则表达式模式的字符串  如果存在则返回true   否则false
    let reg1=/\w/g;
    reg1.test('a');
    console.log(reg1.test('ab'));
    console.log(reg1.test('ab'));
    console.log(reg1.test('ab'));
    //原因：lastIndex这个属性
    while(reg1.test('abcded')){
        console.log(reg1.lastIndex)
    }
    //匹配的index
    //RegExp.prototype.exec(str)  使用正则表达式模式对字符串执行搜索，并将更新全局RegExp对象的属性以反映匹配结果
    //如果没有匹配的文本则返回null，否则返回一个结果数组(两个属性：index声明匹配文本的第一个字符的位置，input存放被检索的字符串string)
    let reg2=/\d(\w)\d/;
    let reg3=/\d(\w)\d/g;
    let str3='1a2b3c4d5e';
    let ret=reg2.exec(str3);
    //在非全局环境下 lastIndex不生效
   // console.log(reg2.lastIndex+'\t'+ret.index+'\t'+ret.toString());
    while(ret=reg3.exec(str3)){
        console.log(reg3.lastIndex+'\t'+ret.index+'\t'+ret.toString());
    }

}
{
    //字符串对象方法
    //String.prototype.search(reg)
    //search()用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。方法返回第一个匹配结果index，查找不到返回-1；
    //不执行全局匹配，它忽略表示g，并且总是从字符串的开始进行搜索
    let m1='a1b2c3d4'.search('1');
    let m2='a1b2c3d4'.search(1);
    let m3='a1b2c3d4'.search(/1/);
    let m4='a1b2c3d4'.search(/1/g);
    console.log(m1,m2,m3);
    //String.prototype.match(reg);
    //match()方法将检索字符串，以找到一个或多个与regexp匹配的文本
    //regexp是否具有标志g对结果影响很大
    //非全局调用：返回数组的第个元素存放的是匹配文本，而其余元素存放的是与正则表达式的子表达式匹配的文本，除了常规的数组元素之外，
    //返回的数组还含有两个对象属性，index声明匹配文本的起始字符在字符串的位置，input声明stringObject的引用。
    //全局调用regexp具有标志g则match()方法将执行全局检索，找到字符串中的所有匹配子字符串。
    //没有找到任何匹配的子串，则返回null,如果找到了一个或多个匹配子串，则返回一个数组。数组存放的是字符串中所有的匹配子串，
    //而且也没有index属性或input属性  match比exec效率高点
    let reg2=/\d(\w)\d/;
    let reg3=/\d(\w)\d/g;
    let ts='1a2b3c4d5e';
    let ret=ts.match(reg2);
    console.log(ret,ret.index,reg2.lastIndex)
    let ret1=ts.match(reg3);
    console.log(ret,ret1.index,reg3.lastIndex)
    //String.prototype.split(reg);
    //我们经常使用split方法把字符串分割为字符数组。'a,b,c,d'.split(',);
    //在一些复杂的分割情况下我们可以使用正则表达式解决
    //'a1b2c3d'.split(/\d/)
    var st='a1b2c3d'.split(/\d/);
    
    var mn='aa-b-c-d'.split(/-/);
    console.log(st,'st',mn,'mn');
    //String.prototype.replace  找谁，替换成谁
    //String.prototype.replace(str,replaceStr)
    //String.prototype.replace(reg,replaceStr)
    //String.prototype.replace(reg,function) function会在每次匹配替换的时候调用，有四个参数1.匹配字符串 2.正则表达式分组内容，没有分组则没有该参数
    //3.匹配项在字符串中的index 4.原字符串
    let commonstr='a1b2c3d4e5';
    let result1=commonstr.replace(/\d/g,function(match,index,origin){
        return parseInt(match)+1;
    })
    let result2=commonstr.replace(/(\d)(\w)(\d)/g,function(match,group1,group2,group3,index,origin){
        console.log(match);
        return group1+group3;
    })
    console.log(result1,'commonstr',result2,'result2')

}