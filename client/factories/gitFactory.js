app.factory('GitFactory', ['$http', function($http){
    var gitUser = {};
    var gitData = {};

    var userCall = function(username){
        $http.jsonp('https://api.github.com/users/' + username + '?callback=JSON_CALLBACK').then(function(response){
            gitUser.data = response.data.data;
            console.log(gitUser.data);
        });
    };

    var makeCall = function(username){
        $http.jsonp('https://api.github.com/users/' + username + '/repos?callback=JSON_CALLBACK').then(function(response){
            gitData.data = response.data.data;
        });
    };

    return {
        userCall: userCall,
        makeCall: makeCall,
        repos: gitData,
        gitUser: gitUser
    };
}]);
