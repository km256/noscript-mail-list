ns.View.define('mail', {
    models: ['mail'],

    events: {
        'ns-view-init': 'onInit'
    },

    methods: {
        onInit: function () {
            if (!this.models.mail.get('.body')) {
                this.models.mail.invalidate();
                ns.page.go();
            }
        }
    }
});
