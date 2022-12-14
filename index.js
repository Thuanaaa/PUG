var express = require('express');
var app = express()
var port = 3000

app.set('views engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
	res.render('index');
});
app.get('/users', function (req, res) {
	res.render('users/index');
});
app.listen(port, function () {
	console.log('Server listening on port ' + port);
});