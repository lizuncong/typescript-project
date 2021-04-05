### typescript项目初始化
- 控制台运行 `tsc --init` 命令初始化typescript项目，ts在根目录下生成 `tsconfig.json` 文件


### 运行
ts代码不能直接运行，需要转换成js代码。
- `npx tsc demo.ts` 运行 `tsc` 命令编译ts文件，生成demo.js文件，再运行 `node demo.js`
- 或者，安装 `ts-node` 插件，然后可以直接运行 `npx ts-node demo.ts`

### 爬虫项目
- 爬虫项目代码位于crawler文件夹下面
- 先运行`npm run dev:build`启动typescript编译，编译后的代码在dist文件夹下面
- 其次运行`npm run dev:start` 启动node服务。
- 运行 `npm run dev` 实际上是合并了前面两个命令


### tsconfig.json
- 如果是在终端运行 `tsc demo.ts` 时，ts默认不会读取 `tsconfig.json`文件。如果是在终端直接运行
  `tsc`，ts会默认读取 `tsconfig.json` 文件。这个区别要注意下。

### 总结
- class如何继承(implements)interface
- interface extends(继承) interface的用法，即接口继承接口
- interface中不确定属性名的用法：[propName: string]: number。
- 如何使用interface定义函数
- 什么是元组，元组和数组的区别
- interface和type的区别。
- 类的public，protected，private的区别。
- 类之间的继承都是使用extends关键字。类继承接口(interface)使用的是implements关键字
- 如何使用class实现单例模式。
- 如何定义类的静态属性
- 什么是抽象类。子类继承(extends)抽象类需要实现什么方法。
- 什么是联合类型，什么是类型保护
- 什么是泛型。
    + 泛型的继承使用extends关键字。
    + 泛型的约束。如何约束泛型只能是指定的类型之一，比如只能是number或者string类型。
    + 泛型的约束。如何约束泛型必须包含某几个属性。比如泛型T必须是一个包含name属性的对象。
- 命名空间namespace的用法
- 如何编写全局类型描述文件和模块代码类型描述文件
- 泛型中keyof语法的使用，重点！！！！要多看几遍
    + 重点！！！！类型不仅仅可以是 基础类型如 number，string等，或者interface。
    还可以是其他的自定义的类型，比如 type MYTYPE = 'name'; const test: MYTYPE = 'name'
- 什么是类的装饰器，类的装饰器接受的参数是一个构造函数
- 什么是方法的装饰器，方法的装饰器接受的参数和类的装饰器不同
- 什么是访问器的装饰器
- 如何定义类型为"构造函数" 的参数？`new (...args: any[]) => any`
