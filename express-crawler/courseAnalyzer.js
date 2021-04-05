"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var CourseAnalyzer = (function () {
    function CourseAnalyzer() {
    }
    CourseAnalyzer.getInstance = function () {
        if (!CourseAnalyzer.instance) {
            CourseAnalyzer.instance = new CourseAnalyzer();
        }
        return CourseAnalyzer.instance;
    };
    CourseAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseCards = $('.course-card');
        var courseInfos = [];
        courseCards.map(function (index, element) {
            var desc = $(element).find('.one span');
            var _a = desc.text().split('·'), level = _a[0], count = _a[1];
            courseInfos.push({
                level: level,
                count: parseInt(count),
            });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos,
        };
    };
    CourseAnalyzer.prototype.generateJsonContent = function (courseResult, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    };
    CourseAnalyzer.prototype.analyze = function (html, filePath) {
        var courseResult = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseResult, filePath);
        return JSON.stringify(fileContent);
    };
    return CourseAnalyzer;
}());
exports.default = CourseAnalyzer;
