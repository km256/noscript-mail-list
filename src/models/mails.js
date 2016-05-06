ns.Model.define('mails', {
    split: {
        items: '.',
        model_id: 'mail',
        params: {
            'id': '.id'
        }
    },

    methods: {
        request: function () {
            return restRequest.call(this, '/api/mails');
        }
    }
});
