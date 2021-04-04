// es6模块化 文件如何编写类型描述文件

declare module 'jquery' {
    interface JqueryInstance{
        html: (params: string) => JqueryInstance;
    }
    function mJq(params: () => void): void;
    function mJq(params: string): JqueryInstance;
    namespace mJq {
        namespace fn {
            class init {}
        }
    }

    export = mJq;
}


