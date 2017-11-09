define(function(require,exports,module){
    let a=12;
    let b=15;
    function show(a,b){
        return a+b;
    }
    module.exports={
        a:a,
        b:b,
        show:show
    }
})