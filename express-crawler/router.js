"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var courseAnalyzer_1 = __importDefault(require("./courseAnalyzer"));
var router = express_1.Router();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('北京欢迎你！');
        return;
    }
    res.send("\n        <html>\n            <body>\n                <form method=\"post\" action=\"/login\">\n                    <input type=\"password\" name=\"password\">\n                    <button>\u63D0\u4EA4</button>\n                </form>\n            </body>\n        </html>\n    ");
});
router.post('/list', function (req, res) {
    var _a = req.body, password = _a.password, username = _a.username;
    if (password !== '123456') {
        res.send(req.teacherName + '密码无效');
        return;
    }
    var url = 'https://coding.imooc.com/?c=fe';
    var courseAnalyzer = courseAnalyzer_1.default.getInstance();
    var crawler = new crawler_1.default(courseAnalyzer, url);
    res.send('list data 66688');
});
router.post('/login', function (req, res) {
    var _a = req.body, password = _a.password, username = _a.username;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('已经登陆过');
        return;
    }
    if (password === '123456') {
        if (req.session) {
            req.session.login = true;
            res.send('登陆成功');
        }
    }
    else {
        res.send('登陆失败');
    }
});
exports.default = router;
