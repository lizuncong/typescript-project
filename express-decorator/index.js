"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./controller");
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
app.use(router_1.default);
app.listen(3007, function () {
    console.log('服务启动了。。。。');
});
