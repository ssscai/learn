
let a=12;
const b=5;

let arr=[{a, b}, {b, a}];

arr.sort((json1, json2)=>json1.a=json2.a);

console.log(arr[0].a);
import {bb} from './mod/m1';
console.log(bb,'bbb');
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
  const promise2 = promise1.then(() => {
    throw new Error('error!!!')
  })
  
  console.log('promise1', promise1)
  console.log('promise2', promise2)
  
  setTimeout(() => {
    console.log('promise1', promise1)
    console.log('promise2', promise2)
  }, 2000)
  
