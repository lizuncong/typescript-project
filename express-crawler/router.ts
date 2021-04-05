import {Request, Response, Router} from 'express'
import Crawler from './crawler';
import CourseAnalyzer from "./courseAnalyzer";


interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined;
    }
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if(isLogin){
        res.send('北京欢迎你！');
        return;
    }
    res.send(`
        <html>
            <body>
                <form method="post" action="/login">
                    <input type="password" name="password">
                    <button>提交</button>
                </form>
            </body>
        </html>
    `)
})


router.post('/list', (req: RequestWithBody, res: Response) => {
    const { password, username } = req.body;
    if(password !== '123456') {
        res.send(req.teacherName + '密码无效')
        return;
    }
    // 要爬取的网页URL
    const url = 'https://coding.imooc.com/?c=fe';

    const courseAnalyzer = CourseAnalyzer.getInstance();
    const crawler = new Crawler(courseAnalyzer, url);
    res.send('list data 66688')
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { password, username } = req.body;
    const isLogin = req.session ? req.session.login : false
    if(isLogin){
        res.send('已经登陆过')
        return;
    }
    if(password === '123456') {
        if(req.session){
            req.session.login = true;
            res.send('登陆成功')
        }
    } else {
        res.send('登陆失败')
    }

})

export default router;
