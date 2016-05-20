app.controller('GitCtrl', ['$scope', '$window', 'GitService', function ($scope, $window, GitService) {

    $scope.gitIt = [];

    $scope.goToRepo = function(index){
        $window.open($scope.gitIt.data[index].html_url, '_blank');
    };

    $scope.submitRequest = function(){
        $scope.showTable = true;
        GitService.makeCall($scope.gitHubUsername);
        $scope.gitIt = GitService.data;
    };

}]);
