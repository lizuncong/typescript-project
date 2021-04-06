interface Teacher {
    name: string;
    age: number;
}

interface Student {
    name: string;
    age: number;
    score: number;
}

// 1.交叉类型
type Test = Teacher & Student;
const printObj = (obj: Test): string => {
    console.log(obj);
    return obj.name;
};
// 传入的参数必须同时包含Teacher和Student里面的属性。
const p: Teacher & Student = {
    name: 'lzc',
    age: 23,
    score: 43
}
printObj(p)

// 2. typeof 关键字
const printT = typeof printObj;
const teacherT = typeof p;
console.log(printT);

// 3. keyof关键字
type k1 = keyof Teacher;
const k: k1 = 'age'; // k只能取值 'name'或者 'age'

type K2 = keyof Teacher[];
const k2: K2 = 'entries'; // k2只能是number类型或者是Array.protoype上的属性

interface P2 {
    [x: string]: Teacher;
}
type K3 = keyof P2;
const n: K3 = '43';

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = {}

myArray[0] = 'fdaf';

// 接口定义构造函数
interface IClass {
    new (hour: number, minute: number): void;
}

const test2: IClass = class {
    constructor(hour: number){

    }
}
const t = new test2(4);