var app = angular.module('myApp', []);
var gitHubUsername = 'the-amber-joy';

app.controller('MyController', ['$scope', 'GitService', function($scope, GitService){
    $scope.gitIt = GitService.data;
    GitService.makeCall();
}]);

app.factory('GitService', ['$http', function($http){
    var gitData = {};

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
            gitData.data = response.data.data;
        });
    };

    return {
        makeCall: makeCall,
        data: gitData
    };
}]);