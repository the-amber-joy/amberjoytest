var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html',
            controller: 'MyCtrl',
        })
        .when('/colors', {
            templateUrl:'views/colors.html',
            controller: 'MyCtrl',
        })
        .when('/answers', {
            templateUrl:'views/answers.html',
            controller: 'BallCtrl'
        })
        .when('/github-table', {
            templateUrl:'views/github-table.html',
            controller: 'GitCtrl'
        });

    $locationProvider.html5Mode(true);
}]);


app.controller('MyCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.goApi = function(){
        $location.path('/github-table');
    };

    $scope.go8ball = function(){
        $location.path('/answers');
    };

    $scope.goColors = function(){
        $location.path('/colors');
    };

}]);
