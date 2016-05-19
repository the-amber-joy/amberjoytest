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

// app.set('port', process.env.PORT || 3000);
// app.listen(app.get('port'), function() {
//     console.log('Magic happens on port', app.get('port'));
// });

app.listen(process.env.PORT, function () {
  console.log('Listening...');
});
