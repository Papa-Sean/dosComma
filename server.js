var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var inventory = [
    {
        id: 1,
        sex:'W',
        style:'HD',
        size: 'L'
    },
    {
        id: 2,
        sex:'M',
        style:'TS',
        size: 'S'
    },
    {
        id: 3,
        sex:'W',
        style:'TS',
        size: 'M'
    },
    {
        id: 4,
        sex:'M',
        style:'HD',
        size: 'L'
    }
];

app.get('/', function(req, res){
    res.render('home',{
        content:'THIS IS SOME CONTENT',
        published: false,
        inventory: inventory
    });
});

app.listen(app.get('port'), function(){
    console.log('CATCH ME IF YOU CAN! ON PORT: ' +app.get('port'));
});

