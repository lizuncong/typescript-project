class Person{
    constructor(public name:string){}
}

class Student extends Person{
    constructor(private age: number, name: string){
        // 一定要手动调用父类的构造器
        super(name);
    }
    printInfo(){
        console.log('my name is：', this.name);
        console.log('my age is：', this.age);
    }
}

const stu = new Student(26,'lzc');
stu.printInfo();
