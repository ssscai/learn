'use strict';

var _m = require('./mod/m1');

var a = 12;
var b = 5;

var arr = [{ a: a, b: b }, { b: b, a: a }];

arr.sort(function (json1, json2) {
  return json1.a = json2.a;
});

console.log(arr[0].a);

console.log(_m.bb, 'bbb');