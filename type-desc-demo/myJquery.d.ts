// 第一种方式：定义全局变量
// declare var $: (params: () => void) => void;


interface JqueryInstance{
    html: (params: string) => JqueryInstance;
}
// 第二种方式，定义全局函数，这里定义了两个$函数，这是一种函数重载的机制
declare function $(params: () => void): void;
declare function $(params: string): JqueryInstance;

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
    namespace fn {
        class init {}
    }
}

// 第三种方式，使用interface
// interface JQuery {
//     (params: () => void): void;
//     (selector: string): JqueryInstance;
// }
// declare var $: JQuery;
