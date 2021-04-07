```typescript
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

// 抽象类 VS 接口的区别
// 抽象类要被子类继承，接口要被类实现；
// 在TS中使用extends去继承一个抽象类，使用implements去实现一个接口；
// 接口只能做方法声明，抽象类中可以做方法声明，也可以作方法实现；
// 抽象类是有规律的，抽离一个类别的公共部分，而接口只是对相同属性和方法的抽象，属性和方法可以无任何关联。

// 泛型
// 在定义泛型时通常使用T(Type)作为变量名称，除了T之外，以下是常见泛型变量代表的意思：
// K（Key）：表示对象中的键类型；
// V（Value）：表示对象中的值类型；
// E（Element）：表示元素类型。
// 泛型约束使用extends实现

// 泛型约束常见使用场景：检查对象上的键是否存在
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

let tsInfo = {
    name: 'lzc',
    age: 26,
}

getProperty(tsInfo, 'name')


// 泛型工具类型：ReadOnly
// 将T中的类型都变为只读
type ReadOnly<T> = {
    readonly [k in keyof T]: T[k];
}
// 1.通过 keyof T 拿到 T 的所有属性名；
// 2.使用 in 进行遍历，将值赋给 k；
// 3.通过 T[k] 取得相应的属性值；
// 4.对每个属性添加readonly修饰符，使其变为只读
interface IPoint{
    x: number;
    y: number;
}

const startPoint: ReadOnly<IPoint> = {
    x: 9,
    y: 9
}

startPoint.x = 10; // 不能修改

// 泛型工具类型：Partial
// 将T中的类型都变为可选
type MyPartial<T> = {
    [K in keyof T]?: T[K];
}

// 通过 keyof T 拿到T的所有属性名
// 使用 in 进行遍历，将值赋给K
// 通过 T[K] 取得相应的属性值
// 对每个属性添加 ？ 修饰符，使其变为可选
interface Todo {
    title: string;
    description: string;
}

let newObj: MyPartial<Todo> = {
    title: 'lzc'
}

// 泛型工具类型：Record<K, T>
type MyRecord<K extends keyof any, T> = {
    [P in K]: T;
}

interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: MyRecord<Page, PageInfo> = {
    about: { title: 'about', },
    contact: { title: 'contact' },
    home: { title: 'home' }
}


// infer关键字 'infer' declarations are only permitted in the 'extends' clause of a conditional type.ts(1338)
// 在条件类型语句中，可以用infer声明一个类型变量并且对它进行使用。
// 获取函数的返回值的实现
type ReturnType2<T> = T extends (...args: (infer R)[]) => string ? R : any;
type ReturnType3<T> = T extends (x: infer R) => number ? R : any;
type returnType = ReturnType2<(a: number) => string>
type returnType2 = ReturnType3<(x: boolean) => number>

let obj1 = {
    a: 1,
    b: "b",
    c: true,
}

let obj2 = {
    a: 1,
}

obj2 = obj1;
// obj1 = obj2;
```