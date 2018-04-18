const url=require('url');
let link='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=expres&rsv_pq=d64402e7000567ba&rsv_t=fa6d%2BWXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1889&rsv_sug4=2987&rsv_sug=1';

let obj=url.parse(link,true)//true表示的是query是否切开
console.log(obj);
obj={
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=expres&rsv_pq=d64402e7000567ba&rsv_t=fa6d%2BWXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1889&rsv_sug4=2987&rsv_sug=1',
    query:
     { ie: 'utf-8',
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
       rsv_sug: '1' },
    pathname: '/s',
    path: '/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=expres&rsv_pq=d64402e7000567ba&rsv_t=fa6d%2BWXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1889&rsv_sug4=2987&rsv_sug=1',
    href: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=expres&rsv_pq=d64402e7000567ba&rsv_t=fa6d%2BWXOimAQ9DNATHbH7K8rFCvsYXNuJtcIOfjB8ZAKtA3JtrC0m9wELJs&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&inputT=1889&rsv_sug4=2987&rsv_sug=1'
 }