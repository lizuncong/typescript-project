
// new (...args: any[]) => any 解析
// 首先 (...args: any[]) => any 是一个函数，函数返回一个any表示函数返回值是任意类型，
// 函数接受很多个参数...args。
// 因此new (...args: any[]) => any 表示一个构造函数
// function personDecorator(){
//     return function<T extends new (...args: any[]) => any>(constructor: T){
//         return class extends constructor {
//             name = '张三';
//             getName(){
//                 return this.name;
//             }
//         };
//     }
// }
//
//
//
// const Person = personDecorator()(class{
//     constructor(public name: string){
//     }
// })

// target圆形，key方法名，paramIndex参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number) {
    console.log(target, key, paramIndex);
}

class Person {
    getName(@paramDecorator name: string, age: number){
        console.log(name, age);
    }
}

const p = new Person();
p.getName('lzc', 26);

