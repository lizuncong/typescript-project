///<reference path='./components.ts' >

// namespace提供了一种模块化的思路，防止变量污染
namespace Home {
    // 将Page暴露出去
    export class Page{
        user: Components.User = {
            name: 'lzc',
        };
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}
