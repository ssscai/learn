import 'babel-polyfill';

{
    //Generator  异步编程的一种解决方案 
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c'
    }
    let k = tell();
    console.log(k.next())
    console.log(k.next())
    console.log(k.next())
    console.log(k.next())
}

{
    let obj={};
    obj[Symbol.iterator]=function *(){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let value  of obj){
        console.log(value)
    }
}

{
    //Generator 最大的优势  状态机  通过 这种方式可以不断的获取状态机的状态
    let state=function*(){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C'
        }
    }
    let states=state();
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
}
// { 
//     // async await编译需要插件支持
//     // let state= async function (){
//     //     while(1){
//     //         await 'AA';
//     //         await 'Bb';
//     //         await 'CC'
//     //     }
//     // }
//     // let states=state();
//     // console.log(states.next());
//     // console.log(states.next());
//     // console.log(states.next());
//     // console.log(states.next());
//     // console.log(states.next());
//     // console.log(states.next());
// }
{
    //次数没有保存在全局中
  let draw=function(count){
    console.info(`剩余${count}次`)
  }  
  let residue=function*(count){
      while(count>0){
          count--;
          yield draw(count)
      }
  }
  let star=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent="抽奖";
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    star.next();
  },false)
}
{
    //模拟ajax的过程  长轮询
    let ajax=function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },1000)
        })
    }
    let pull=function(){
        let generator=ajax();
        let step=generator.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.info('wait');
                    pull();
                },1000)
            }else{
                console.log(d)
                d--;
            }
        })
    }
    pull();
}