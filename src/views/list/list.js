ns.ViewCollection.define('list', {
    models: ['mails'],
    split: {
        byModel: 'mails',
        intoViews: 'list-item'
    }
});
