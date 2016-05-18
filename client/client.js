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