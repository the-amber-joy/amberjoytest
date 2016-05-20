app.controller('GitCtrl', ['$scope', '$window', 'GitService', function ($scope, $window, GitService) {

    $scope.gitIt = [];
    $scope.gitUser = {};

    $scope.goToRepo = function(index){
        $window.open($scope.gitIt.data[index].html_url, '_blank');
    };

    $scope.submitRequest = function(){
        GitService.userCall($scope.gitHubUsername);
        GitService.makeCall($scope.gitHubUsername);
        $scope.gitIt = GitService.repos;
        $scope.gitUser = GitService.gitUser;
        $scope.showTable = true;
        console.log($scope.gitUser);
    };

}]);
