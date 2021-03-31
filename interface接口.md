### interface的基本使用
```typescript
const getPersonName1 = (person: { name: string }): string => {
    return person.name
}

const setPersonName1 = (person: { name: string }, name: string) => {
    person.name = name
}


// 1. 使用interface接口声明Person类型
interface Person {
  readonly name: string; // 只读属性
  age?: number; // 可选属性
}
const getPersonName2 = (person: Person): string => {
    return person.name
}

const setPersonName2 = (person: Person, name: string) => {
    person.name = name
}
const p = { name: 'lzc', sex: 'male' }
getPersonName2(p)
setPersonName2(p, 'ysn')


// 2.也可以使用type定义Person类型
type Person1 = {
    name: string;
}
const getPersonName = (person: Person1): string => {
    return person.name
}

const setPersonName = (person: Person1, name: string) => {
    person.name = name
}
```

### TS对变量的校验规则
当以字面量的形式直接传递一个对象给变量时，TS会对这个对象进行强校验。
```typescript
interface Person {
  readonly name: string;
  address: string;
  age?: number;
}

const getPersonName = (person: Person):string => {
    return person.name
}

const setPersonAddress: (person: Person, address: string) => void = (person, address) => {
    person.address = name
}

const p = {
    name: 'lzc',
    address: 'beijing',
    sex: 'male', // 注意！！！这个属性在Person类型中是没有声明的！！！
}
getPersonName(p);  // TS不会对p进行强校验
setPersonAddress(p, 'guangzhou') // TS 不会对p进行强校验

getPersonName({
    name: 'lzc',
    address: 'beijing',
    sex: 'male', // 注意！！！以字面量的形式传递对象给变量，TS会进行强校验，这个对象多了个sex属性
});  
setPersonAddress({
    name: 'lzc',
    address: 'beijing',
    sex: 'male',
}, 'guangzhou') // TS 不会对p进行强校验
```

### 如果对象的其他属性不确定，如何定义？
假设有个场景，定义一个Person类型，我只知道name，address，age是确定的，其他属性字段不确定
```typescript
interface Person {
  readonly name: string;
  address: string;
  age?: number;
  say(): string;
  [propName: string]: any;
}

const getPersonName = (person: Person):string => {
    return person.name
}

const setPersonAddress: (person: Person, address: string) => void = (person, address) => {
    person.address = name
}

const p = {
    name: 'lzc',
    address: 'beijing',
    say: () => {
        return 'lzc'
    },
    sex: 'male',
    score: 3,
}

getPersonName(p)

getPersonName({
  name: 'lzc',
  address: 'beijing',
  say: () => {
      return 'lzc'
  },
  sex: 'male', // 由于Person接口定义了[propName: string]:any属性类型，因此可以添加任意多的额外属性
  score: 3,
  test: 'ha'
})
```


### 使用interface定义函数
```typescript
interface Print {
  (content: string): string;
  // name: string; // 不能再定义额外属性，此时Print代表一个函数类型
}
const print: Print = (content) => {
    console.log('print content', content);
    return content
}
```

### interface之间相互继承
```typescript
interface Person {
  readonly name: string;
  address: string;
  age?: number;
  say(): string;
  [propName: string]: any;
}

interface Teacher extends Person{
  teach(): string;
}
```

### class可以继承interface
当一个class继承(implements)interface时，class必须包含interface定义的必需属性
```typescript
interface Person {
  readonly name: string;
  address: string;
  age?: number;
  say(): string;
  [propName: string]: any;
}
class User implements Person{
    name = 'lzc';
    address = 'beijing';
    say(){
        return 'my name is lzc'
    }
}
```

### interface和type的区别
type类型别名，可以使用type声明对象类型和基本类型。interface只能声明对象类型
```typescript
type stringAlias = string;
```
