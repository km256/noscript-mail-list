ns.DEBUG = true;

ns.router.routes = {
    route: {
        '/': 'index',
        '/{id:int}': 'mail'
    }
};

$(function () {
    ns.init();
    ns.page.go();
});
