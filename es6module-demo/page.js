"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
var Page = (function () {
    function Page() {
        new components_1.Header();
        new components_1.Content();
        new components_1.Footer();
    }
    return Page;
}());
var p = new Page();
