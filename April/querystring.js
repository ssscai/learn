const querystring=require('querystring');//querystring 模块用于实现url参数字符串与参数对象的相互转换
let str='ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=expres&rsv_pq=d64402e7000567ba&rsv_t=fa6d%2BWXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1889&rsv_sug4=2987&rsv_sug=1'
let obj=querystring.parse(str);
console.log(obj,'obj')
obj={
    ie: 'utf-8',                                                                 
    f: '8',                                                                      
    rsv_bp: '0',                                                                 
    rsv_idx: '1',                                                                
    tn: 'baidu',                                                                 
    wd: 'expres',                                                                
    rsv_pq: 'd64402e7000567ba',                                                  
    rsv_t: 'fa6d+WXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs',        
    rqlang: 'cn',                                                                
    rsv_enter: '1',                                                              
    rsv_sug3: '7',                                                               
    rsv_sug1: '6',                                                               
    rsv_sug7: '100',                                                             
    rsv_sug2: '0',                                                               
    inputT: '1889',                                                              
    rsv_sug4: '2987',                                                            
    rsv_sug: '1'                                                       
}