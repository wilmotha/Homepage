var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');



var app = express();
var port = process.env.PORT || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
    res.status(200);
    res.render('homepage', {
        title: 'Home',
        home: 'cur',
        projects: 'not',
        aboutme: 'not'
    });
});

app.get('/projects', function (req, res, next) {
    res.status(200);
    res.render('projects', {
        title: 'Projects',
        home: 'not',
        projects: 'cur',
        aboutme: 'not'
    });
});

app.get('/about-me', function (req, res, next) {
    res.status(200);
    res.render('about-me', {
        title: 'About Me',
        home: 'not',
        projects: 'not',
        aboutme: 'cur'
    });
});

app.use(express.static('public'));

app.get('*', function (req, res, next) {
    res.status(404);
    res.render('404', {
        title: '404',
        home: 'not',
        projects: 'not',
        aboutme: 'not'
    });
});

app.listen(port, function(err){
    console.log("== Server is listening on port", port);
});