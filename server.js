var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 8080

app.engine('handlebars', exphbs({ degaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next){
    res.status(200);
    res.render('homepage', {
        title: 'Home'
    });
});

app.get('/projects', function (req, res, next) {
    res.status(200);
    res.render('projects', {
        title: 'Projects'
    });
});

app.get('/about-me', function (req, res, next) {
    res.status(200);
    res.render('about-me', {
        title: 'About Me'
    });
});

app.use(express.static('public'));

app.listen(port, function(err){
    console.log("== Server is listening on port", port);
});