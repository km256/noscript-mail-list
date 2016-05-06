ns.Model.define('mail', {
    params: {
        id: '.id'
    },

    methods: {
        request: function () {
            return restRequest.call(this, '/api/mails/' + this.params.id);
        }

    }
});
