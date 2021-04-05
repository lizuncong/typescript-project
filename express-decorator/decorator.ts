import { Router, RequestHandler } from "express";
import router from './router';

enum Method{
    get = 'get',
    post = 'post',
    put = 'put',
    del = 'delete'
}

function getRequestDecorator(type: Method){
    return function(path: string){
        return function(target: any, key: string){
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        }
    }
}

export const get = getRequestDecorator(Method.get);

export const post = getRequestDecorator(Method.post);

export const put = getRequestDecorator(Method.put);

export const del = getRequestDecorator(Method.del);

export function controller(root: string){
    return function controller(target: new (...args: any[]) => any){
        console.log('controller...');
        for(let key in target.prototype){
            const path: string = Reflect.getMetadata('path', target.prototype, key);
            const method: Method = Reflect.getMetadata('method', target.prototype, key);
            const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target.prototype, key);
            const handler = target.prototype[key];
            if(path && method){
                const fullPath = `${root}${path}`;
                if(middlewares && middlewares.length){
                    router[method](fullPath, ...middlewares, handler)
                } else {
                    router[method](fullPath, handler)
                }
            }
        }
    }
}


export function use(middleware: RequestHandler){
    return function(target: any, key: string){
        const originMiddlewares = Reflect.getMetadata('middlewares', target, key) || [];
        originMiddlewares.push(middleware)
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key)
    }
}
