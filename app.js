var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/submission', indexController.submission);
app.get('/round2', indexController.round2);

app.post('/submitVideoForm', indexController.submitVideo);
app.post('/votingForm', indexController.votingVideos);


var server = app.listen(8634, function() {
	console.log('Express server listening on port ' + server.address().port);
});
