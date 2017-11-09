"use strict";

require("babel-polyfill");

var _m = require("./mod/m1");

var _m2 = _interopRequireDefault(_m);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 12;
var b = 5;

var arr = [{ a: a, b: b }, { b: b, a: a }];

arr.sort(function (json1, json2) {
  return json1.a = json2.a;
});

console.log(arr[0].a);

console.log(_m2.default);