app.controller('BallCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.showAnswer = false;

    $scope.getAnswer = function(){
        $scope.showAnswer = true;

        $http.get('/answers').success(function(response){
            console.log(response);
            $scope.answer = response;
        });
    };

}]);
