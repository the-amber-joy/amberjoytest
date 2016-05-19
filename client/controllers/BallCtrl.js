app.controller('BallCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.question = '';
    $scope.getAnswer = function(){
        $http.get('/answers').success(function(response){
            $scope.answer = response;
        });
    };

}]);
