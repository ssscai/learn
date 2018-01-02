var url=require('url');
var  str="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
// console.log(url.parse(str));
// console.log(url.parse(str,true));
// url.parse(str)={
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
//  }
//  //默认为false，为true时，返回的url对象中，query的属性为一个对象
// url.parse(str,true)={
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: { query: 'string' },
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' 
// }
var url_1 = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
//console.log(url_1);
var url_2 = url.resolve('http://www.example.com/foo/bar', '../baz');
///console.log(url_2);
var str3="https://shanghai.anjuke.com/ajax/autocomplete/?callback=jQuery1113006422026810922388_1514448895748&kw=&city_id=11&app_id=1&from=2&num=10&_=1514448895749"
console.log(url.parse(str3));
// console.log(url.parse(str3,true))
var querystring=require('querystring');
var mimi="a=123&b=4565&c=ssss"
var st=querystring.parse(url.parse(str3).query);
console.log(st,'ststst')