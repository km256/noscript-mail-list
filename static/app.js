ns.DEBUG = true;

ns.router.routes = {
    route: {
        '/': 'index',
        '/{id:int}': 'mail'
    }
};

ns.layout.define('app', {
    app: {
        list: true,
        'content@': {}
    }
});

ns.layout.define('index', {
    'app content@': 'index'
}, 'app');

ns.layout.define('mail', {
    'app content@': function (params) {
        ns.Model.get('list-state').set('.activeItemId', params.id);
        return 'mail';
    }
}, 'app');


ns.Model.define('mail', {
    params: {
        id: '.id'
    },
    methods: {
        request: function () {
            return ns.http('/api/mails/' + this.params.id , {}, {type: 'GET'})
                .then(function (data) {
                    this.setData(data);
                }, function (error) {
                    this.setError(error);
                }, this)
        }
    }
});

ns.Model.define('list-state', {
    defaults: {
        activeItemId: null
    },

    methods: {
        canRequest: function() {
            return false;
        }
    }
});

ns.Model.get('list-state').setData({});

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
            return ns.http('/api/mails', {}, {type: 'GET'})
                .then(function (data) {
                    this.setData(data);
                }, function (error) {
                    this.setError(error);
                }, this)
        }
    }
});

ns.View.define('app');
ns.View.define('index');

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

ns.View.define('list-item', {
    models: ['mail', 'list-state']
});

ns.ViewCollection.define('list', {
    models: ['mails'],
    split: {
        byModel: 'mails',
        intoViews: 'list-item'
    }
});

$(function () {
    ns.init();
    ns.page.go();
});

