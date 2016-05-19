app.factory('GitService', ['$http', function($http){
    var gitData = {};

    var makeCall = function(username){
        $http.jsonp('https://api.github.com/users/' + username + '/repos?callback=JSON_CALLBACK').then(function(response){
            gitData.data = response.data.data;
        });
    };

    return {
        makeCall: makeCall,
        data: gitData
    };
}]);
