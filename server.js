var express = require('express');
var app = express();
var path = require('path');
var mails = require('./mocks/mails');

app.use('/static', express.static('static'));
app.use('/node_modules', express.static('node_modules'));

app.get('/api/mails', function (req, res) {
    res.json(mails.map(function (mail) {
        return {
            id: mail.id,
            subject: mail.subject,
            isRead: mail.isRead
        };
    }));
});

app.get('/api/mails/:id', function (req, res) {
    var id = parseInt(req.params.id),
        mail;

    mail = mails.find(function (mail) {
        return mail.id === id;
    });
    mail.isRead = true;
    res.json(mail);
});

app.get('/', index);
app.get('/:id', index);

function index(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
}

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
