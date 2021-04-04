var Home;
(function (Home) {
    var Page = (function () {
        function Page() {
            this.user = {
                name: 'lzc',
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
