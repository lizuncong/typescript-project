### getter和setter
private修饰的私有属性，一般来说都要加个下划线前缀，这是比较好的做法
```typescript
// 私有属性一般使用下划线前缀
class Person{
    constructor(private _name: string){}

    get getName(){
        return this._name;
    }

    set name(name:string){
        this._name = name
    }
}

const p = new Person('lzc')
console.log('p.name', p.getName) // getName是getter属性，不是方法，不需要括号调用
p.name = 'ysn';
console.log('p.name', p.getName)
```


### 静态属性，如何实现单例模式
这一节使用静态属性实现单例模式
```typescript
class Person{
    private static instance: Person;
    // 使用private修饰constructor，这样就限制了不能通过外部去new一个Person实例
    private constructor(public name: string){}

    // 实例方法
    printInfo(){

    }

    // 使用static定义静态属性
    static getInstance(name: string){
        // 静态属性也可以通过类访问，如：Person.instance
        if(!this.instance) this.instance = new Person(name);
        return this.instance;
    }
}

const p = Person.getInstance('lzc');
console.log('p.name', p.name);
```
