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
var userInfo = undefined;
function catchError(name) {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (e) {
                console.log("userInfo." + name + "\u5B58\u5728\u95EE\u9898..");
            }
        };
    };
}
var Person = (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        return userInfo.name;
    };
    Person.prototype.getAge = function () {
        return userInfo.age;
    };
    __decorate([
        catchError('name'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "getName", null);
    __decorate([
        catchError('age'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "getAge", null);
    return Person;
}());
var p = new Person();
p.getName();
p.getAge();
