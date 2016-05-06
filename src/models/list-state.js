ns.Model.define('list-state', {
    defaults: {
        activeItemId: null
    },

    ctor: function () {
        ns.events.on('ns-page-before-load', this.invalidate.bind(this));
    },

    methods: {
        request: function () {
            return Vow.promise(ns.page.current.params.id || null).then(function (activeItemId) {
                this.setData({activeItemId: activeItemId})
            }, this)
        }
    }
});
