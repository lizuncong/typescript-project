import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import router from './router';


// 问题1：express库的类型定义文件 .d.ts 文件类型描述不准确
//   方法：扩展解决Express的类型定义文件问题
// 问题2：当我使用中间件的时候，对req，res做了修改之后，实际上
// 类型并不能改变

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieSession({
    name: 'session',
    keys: ['lzc'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// 问题2 demo
app.use((req: Request, res: Response, next: NextFunction) => {
    // 由于Request类型上没有自定义的teacherName这个属性，因此TS会提示错误。
    // 解决这个问题，可以创建一个自定义的类型描述文件custom.d.ts文件。
    req.teacherName = 'lzc';
    next();
})

app.use(router)

app.listen(3007, () => {
    console.log('服务启动了。。。。')
})
