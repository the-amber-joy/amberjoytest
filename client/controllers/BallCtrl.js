app.controller('BallCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.question = '';
    $scope.showAnswer = false;
    $scope.getAnswer = function(){
        $scope.showAnswer = true;
        $http.get('/answers').success(function(response){
            $scope.answer = response;
        });
    };

}]);
