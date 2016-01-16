var app = angular.module('myApp', []);
var gitHubUsername = 'the-amber-joy';

app.controller('MyController', ['$scope', '$http', /*'MyService',*/ 'GitService', function($scope, $http, GitService){
    //$scope.greeting = MyService.greeting;
    //$scope.repoName = MyService.response.data;
    $scope.gitIt = GitService.data;
    GitService.makeCall();
}]);

app.factory('GitService', ['$http', function($http){
    var gitData = {};

    var makeCall = function(){
        $http.get('/').then(function(response){
            gitData.results = response.data;
        });

        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
            console.log(response);
        });
    };

    return {
        makeCall: makeCall,
        data: gitData
    };
}]);

//app.factory('MyService', function(){
//    return {
//        greeting: 'Hello World'
//    }
//});