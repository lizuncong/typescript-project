import express, { Request, Response, NextFunction } from 'express';
import './controller'
import router from './router';

const app = express();

app.use(router)

app.listen(3007, () => {
    console.log('服务启动了。。。。')
})
