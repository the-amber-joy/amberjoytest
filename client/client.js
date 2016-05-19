var app = angular.module('myApp', ['ngRoute']);
//var gitHubUsername = '';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/answers', {
            templateUrl:'views/answers.html',
            controller: 'MyController'
        })
        .when('/github-table', {
            templateUrl:'views/github-table.html',
            controller: 'MyController'
        });

    $locationProvider.html5Mode(true);
}]);

app.factory('GitService', ['$http', function($http){
    var gitData = {};

    var makeCall = function(username){
        $http.jsonp('https://api.github.com/users/' + username + '/events?callback=JSON_CALLBACK').then(function(response){
            gitData.data = response.data.data;
        });
    };

    return {
        makeCall: makeCall,
        data: gitData
    };
}]);

app.controller('MyController', ['$scope', '$location', '$http', 'GitService', function ($scope, $location, $http, GitService) {

    $scope.goApi = function(){
        $location.path('/github-table');
    };

    $scope.go8ball = function(){
        $location.path('/answers');
    };

    $scope.submitRequest = function(){
        $scope.showTable = true;
        GitService.makeCall($scope.gitHubUsername);
        $scope.gitIt = GitService.data;
    };

    $scope.getAnswer = function(){

        $scope.answer = '';

        $http.get('/answers')
            .then(function(response){
                $scope.answers = response;
                console.log("response", response);
        });
    };

}]);

