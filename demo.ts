
interface Person {
    name: string;
}

interface Teacher extends Person{
   subject: string;
}

interface Student extends Person{
    age: number;
}

interface Driver extends Person{
    driveAge: number;
}

const teacher: Teacher = {
   name: 'lzc',
   subject: 'math'
}

const student: Student = {
    name: 'ysn',
    age: 26,
}

const driver: Driver = {
    name: 'mike',
    driveAge: 5,
}

const getUserName = (user: Person) => {
    console.log('user.name', user.name);
}

getUserName(teacher)
getUserName(student)
getUserName(driver)
