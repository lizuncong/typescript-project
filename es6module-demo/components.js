"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Header = (function () {
    function Header() {
        console.log('header...');
        var elem = document.createElement('div');
        elem.innerText = 'This is Header';
        document.body.appendChild(elem);
    }
    return Header;
}());
exports.Header = Header;
var Content = (function () {
    function Content() {
        var elem = document.createElement('div');
        elem.innerText = 'This is Content';
        document.body.appendChild(elem);
    }
    return Content;
}());
exports.Content = Content;
var Footer = (function () {
    function Footer() {
        var elem = document.createElement('div');
        elem.innerText = 'This is Footer';
        document.body.appendChild(elem);
    }
    return Footer;
}());
exports.Footer = Footer;
