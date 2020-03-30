var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var secure = require('ssl-express-www');
var app = express();

// app.use(secure);

//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//index
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'XALGORITHMS'
  });
});

app.get('/team', (req, res) => {
  res.render('pages/team', {
    title: 'XALGORITHMS | Team'
  });
});

app.get('/donate', (req, res) => {
  res.render('pages/donate', {
    title: 'XALGORITHMS | Donate'
  });
});

app.get('/covid-19-alerts', (req, res) => {
  res.render('pages/covid-19-alerts', {
    title: 'XALGORITHMS | Covid 19 Alerts'
  });
});

//team



app.use(express.static(__dirname + '/public'));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.set('view engine', 'pug');
