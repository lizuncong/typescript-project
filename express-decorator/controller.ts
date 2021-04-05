import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express'
import { controller, use, get, post } from './decorator';


const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    console.log('登录验证中间件...');
    next();
}

// 如何在一个方法上使用多个装饰器？
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('日志记录中间件...');
    next();
}

@controller('/home')
class HomeController {

    @get('/')
    home(req: Request, res: Response){
        res.send('This is home page')
    }


    @get('/login')
    login(req: Request, res: Response){
        res.send('Login Success')
    }

    @post('/create')
    @use(checkLogin)
    @use(logger)
    create(req: Request, res: Response){
        res.send('Create Success')
    }
}
