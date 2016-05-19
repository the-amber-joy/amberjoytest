var app = angular.module('myApp', ['ngRoute']);
var gitHubUsername = '';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/answers', {
            templateUrl:'views/answers.html',
            controller: 'EightBallController'
        })
        .when('/github-table', {
            templateUrl:'views/github-table.html',
            controller: 'MyController'
        });

    $locationProvider.html5Mode(true);
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

app.controller('MyController', ['$scope', 'GitService', function ($scope, GitService) {

    $scope.displayResults = false;

    $scope.submitRequest = function(){
        $scope.displayResults = true;
        $scope.gitHubUsername;
        GitService.makeCall();
    };

}]);

app.controller('EightBallController', ['$scope', '$http', function ($scope, $http){

    $scope.display8ball = false;
    $scope.getAnswer = function(){
        $scope.display8ball = true;
        $scope.answers = "Answers will be here!";
        $http.get('/answers').then(function(response){
            console.log("response", response);
            $scope.gitIt = GitService.data;
        });
    };

}]);

