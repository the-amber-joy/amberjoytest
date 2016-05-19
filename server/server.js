var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var answers = require('./routes/answers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/answers', answers);


app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html');
});


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});