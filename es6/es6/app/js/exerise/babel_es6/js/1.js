import "babel-polyfill";
let a=12;
const b=5;

let arr=[{a, b}, {b, a}];

arr.sort((json1, json2)=>json1.a=json2.a);

console.log(arr[0].a);
import m1 from "./mod/m1";
console.log(m1)