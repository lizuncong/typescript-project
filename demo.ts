
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

// 普通方法，target对应的是类的prototype
// key 对应的是装饰的方法的名字
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log('target..', target);
    console.log('key..', key);
    descriptor.writable = false; //装饰的方法不能被重写
    descriptor.value = () => {
        return 'descriptor.value';
    }
}

class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    @getNameDecorator
    getName(){
        return this.name;
    }

    // @getNameDecorator
    // static staticGetName(){
    //     return '张三'
    // }
}

const p = new Person('lzc');


console.log('p..', p);
console.log('p.getName..', p.getName());
