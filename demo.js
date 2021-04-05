"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testDecorator(constructor) {
    constructor.prototype.getName = function () {
        console.log('lzc');
    };
    console.log('testDecorator.....', constructor);
}
function testDecorator2(flag) {
    if (!flag) {
        return function (constructor) { };
    }
    return function testDecorator2(constructor) {
        console.log('testDecorator2222.....', constructor);
    };
}
var Test = (function () {
    function Test() {
    }
    Test = __decorate([
        testDecorator,
        testDecorator2(false)
    ], Test);
    return Test;
}());
var test = new Test();
test.getName();
