
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


function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
}

class Person {
    private _name: string;
    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    @visitDecorator
    set name(name:string){
        this._name = name;
    }
}

const p = new Person('lzc');

p.name = '666';
console.log('p..', p.name);
