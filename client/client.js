var app = angular.module('myApp', []);

var gitHubUsername = '';


app.controller('MyController', ['$scope', 'GitService', function ($scope, GitService) {

    $scope.gitHubUsername = '';

    $scope.submitRequest = function(){
        console.log(gitHubUsername);
        gitHubUsername = $scope.gitHubUsername;
        GitService.makeCall();
        $scope.gitIt = GitService.data;
    }

}]);

// ANGULAR SERVICES can be pulled in ANYWHERE, they return an object... this is like in NODE when we require node module exports - they exist in one place but can be called on from ANYWHERE

app.factory('GitService', ['$http', function($http){
    var gitData = {};

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
            gitData.data = response.data.data;
            console.log(gitData);
        });
    };

    return {
        makeCall: makeCall,
        data: gitData
    };
}]);

//factories always expect to output/make public/return their information in the form of OBJECTS