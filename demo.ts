interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

// 类型保护的几种方法

// 1. 类型断言： as
function trainAnimal(animal: Bird | Dog){
    if(animal.fly){
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}

// 2. in 语法来做类型保护
function trainAnimal2(animal: Bird | Dog){
    if('sing' in animal){
        animal.sing();
    } else {
        animal.bark();
    }
}

// 3. typeof 语法做类型保护
function add(first: string | number, second: string | number){
    if(typeof first === 'string' || typeof second === 'string'){
        return `${first}${second}`;
    }
    return first + second;
}

// 4. instanceof 语法做类型保护
class NumberObj {
    count: number;
}

function add2(first: object | NumberObj, second: object | NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count;
    }
    return 0;
}
