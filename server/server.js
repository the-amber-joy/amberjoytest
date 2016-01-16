var express = require('express');
var app = express();
var gitHubUsername = 'the-amber-joy';

app.use(express.static('server/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/gitSome', function(request, response){
    var myGit = $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
        console.log(response);
    });

    response.send(myGit);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});