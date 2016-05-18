var app = angular.module('myApp', ['ngRoute']);

var gitHubUsername = '';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/answers', {
            templateUrl:'views/answers.html',
            controller: 'MyController'
        });

    $locationProvider.html5Mode(true);
}]);

app.controller('MyController', ['$scope', 'GitService', function ($scope, GitService) {

    $scope.gitHubUsername = '';
    $scope.displayResults = false;

    $scope.submitRequest = function(){
        $scope.displayResults = true;
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
