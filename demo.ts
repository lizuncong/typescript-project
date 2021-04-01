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

