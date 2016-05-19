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

app.factory('BallService', ['$http', function($http){
    var answer = {};

    var ask = function(){
        $http.get('/answers').success(function(response){
            console.log("response:", response);
            answer = response;
        });
    };

    return {
        ask: ask,
        answer: answer
    };
}]);

app.controller('MyController', ['$scope', '$location', '$http', 'GitService', 'BallService', function ($scope, $location, $http, GitService, BallService) {

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

        BallService.ask();
        $scope.answer = BallService.answer;

        console.log('answer?', BallService.answer);

        //$http.get('/answers').success(function(response){
        //    console.log(response);
        //    $scope.answer = response;
        //});
    };

}]);

