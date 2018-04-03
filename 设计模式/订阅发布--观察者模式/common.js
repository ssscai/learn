var Observer=(function(){
    var _messages={};
    return {
        regist:function(type,fn){
            if(typeof _messages[type]=='undefined'){
                _messages[type]=[fn]
            }else{
                _messages[type].push(fn)
            }
        },
        fire:function(type,args){
            if(!_messages[type]){
                return
            }
            var events={
                type:type,
                args:args||{}
            };
            var len=_messages[type].length;
            for(var i=0;i<len;i++){
                _messages[type][i].call(this,events)
            }
        },
        remove:function(type,fn){
            if(_messages[type] instanceof Array){
                var i=_messages[type].length-1;
                for(i;i>=0;i--){
                    _messages[type][i]===fn&&_messages[type].splice(i,1)
                }
            }
        }
    }
})()
Observer.regist('test',function(e){
    console.log(e.type,e.args.msg)
})