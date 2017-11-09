define(function(require,exports,module){
    let a=require('./a');
    let b=require('./b');
    console.log(a,'a',b,'b')
    exports.c=a.num1+b.num1;
 })