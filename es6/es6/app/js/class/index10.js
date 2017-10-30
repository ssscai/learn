import 'babel-polyfill';
//promise;
{
    let ajax=function(callback){
        setTimeout(function(){
            callback();
        },1000)
    }
}