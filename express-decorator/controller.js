"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var decorator_1 = require("./decorator");
var checkLogin = function (req, res, next) {
    console.log('登录验证中间件...');
    next();
};
var logger = function (req, res, next) {
    console.log('日志记录中间件...');
    next();
};
var HomeController = (function () {
    function HomeController() {
    }
    HomeController.prototype.home = function (req, res) {
        res.send('This is home page');
    };
    HomeController.prototype.login = function (req, res) {
        res.send('Login Success');
    };
    HomeController.prototype.create = function (req, res) {
        res.send('Create Success');
    };
    __decorate([
        decorator_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "home", null);
    __decorate([
        decorator_1.get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "login", null);
    __decorate([
        decorator_1.post('/create'),
        decorator_1.use(checkLogin),
        decorator_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "create", null);
    HomeController = __decorate([
        decorator_1.controller('/home')
    ], HomeController);
    return HomeController;
}());
