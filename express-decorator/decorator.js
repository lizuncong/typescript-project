"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("./router"));
var Method;
(function (Method) {
    Method["get"] = "get";
    Method["post"] = "post";
    Method["put"] = "put";
    Method["del"] = "delete";
})(Method || (Method = {}));
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(Method.get);
exports.post = getRequestDecorator(Method.post);
exports.put = getRequestDecorator(Method.put);
exports.del = getRequestDecorator(Method.del);
function controller(root) {
    return function controller(target) {
        console.log('controller...');
        for (var key in target.prototype) {
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            var middlewares = Reflect.getMetadata('middlewares', target.prototype, key);
            var handler = target.prototype[key];
            if (path && method) {
                var fullPath = "" + root + path;
                if (middlewares && middlewares.length) {
                    router_1.default[method].apply(router_1.default, __spreadArrays([fullPath], middlewares, [handler]));
                }
                else {
                    router_1.default[method](fullPath, handler);
                }
            }
        }
    };
}
exports.controller = controller;
function use(middleware) {
    return function (target, key) {
        var originMiddlewares = Reflect.getMetadata('middlewares', target, key) || [];
        originMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key);
    };
}
exports.use = use;
