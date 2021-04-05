

interface Person {
    name: string;
    age: number;
    gender: string;
    [propName: string]: any;
}

class Teacher {
    constructor(private info: Person){}

    // 第一种写法，这种写法TS无法推断this.info[key]返回值的类型
    // getInfo(key: string){
    //     // 由于this.info[key]的返回值的类型不确定，因此TS会提示错误
    //     return this.info[key];
    // }

    // 第二种写法，类型保护。显然这种写法不是最优的
    // getInfo(key: string){
    //     if(key === 'name' || key === 'age' || key === 'gender'){
    //         return this.info[key];
    //     }
    // }

    // 第三种写法，最优写法，采用泛型结合keyof实现
    // keyof Person 第一次遍历时，结果是 'name'。此时T extends keyof Person相当于 T extends 'name'。
    // T extends 'name' 等价于 type T = 'name';
    // 因此 T extends keyof Person相当于
    // T extends 'name' | 'age' | 'gender'
    getInfo<T extends keyof Person>(key: T): Person[T]{
        return this.info[key];
    }

    // 第四种写法，为方便理解keyof的写法，采用联合类型
    getInfo2<T extends 'name' | 'age' | 'gender'>(key: T): Person[T]{
        return this.info[key];
    }
}

const teacher = new Teacher({
    name: 'lzc',
    age: 26,
    gender: '男',
    test: 123
})

const n = teacher.getInfo('name');
const n2 = teacher.getInfo2('name');
console.log('name..', n, n2)

const age = teacher.getInfo('age');
const age2 = teacher.getInfo2('age');

const t = teacher.getInfo('test');

// 重点，这里也可以看出，类型不仅可以是基础类型比如number，string等或者interface等。
// 还可以是自定义的类型。
type MY_TYPE = 'name';

const test: MY_TYPE = 'name';
