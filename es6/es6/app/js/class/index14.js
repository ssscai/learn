//模块化module
// export let AA = 123;
// export function testAA() {
//     console.log('test')
// }
// export class Student {
//     say() {
//         console.log('class')
//     }
// }

let A=123;
let test=function(){

}
class Hello{
    say(){
        console.log('saysay')
    }
}
export default {
    A,
    test,
    Hello
}