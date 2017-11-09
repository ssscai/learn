class Timer{
    countdown(end,update,handle){
        const now=new Date().getTime();
        const self=this;
        if(now-end){
            //当前时间大于结束时间说明倒计时已经 结束
            handle.call(self);
        }else{
            let last_time=end-now;
            const px_d=1000*60*60*24;
            const px_h=1000*60*60;
            const px_m=1000*60;//一分钟等于60s
            const px_s=1000;//一秒等于1000毫秒
            let d=Math.floor(last_time/px_d);//计算差时间的天
            let h=Math.floor((last_time-px_d*d)/px_h);
            let m=Math.floor((last_time-px_d*d-px_h*h)/px_m);
            let s=Math.floor((last_time-px_d*d-px_h*h-px_m*m)/px_s);
            let r=[];
            if(d>0){
                r.push(`<em>${d}</em>天`)
            }
            if(r.length|| h>0){
                r.push(`<em>${h}</em>时`)        
            }
            if(r.length|| m>0){
                r.push(`<em>${m}</em>分`)        
            }
            if(r.length|| s>0){
                r.push(`<em>${s}</em>秒`)        
            }
            self.last_time=r.join('');
            update.call(self,r.join(''));
            setTimeout(function(){
                countdown(end,update,handle);//不断的递减运算
            },1000)
        }
    }
}