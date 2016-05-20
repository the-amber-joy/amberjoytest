app.controller('GitCtrl', ['$scope', '$window', 'GitFactory', function ($scope, $window, GitFactory) {

    $scope.gitIt = [];
    $scope.gitUser = {};
    $scope.showTable = false;

    $scope.goToRepo = function(index){
        $window.open($scope.gitIt.data[index].html_url, '_blank');
    };

    $scope.submitRequest = function(){
        GitFactory.userCall($scope.gitHubUsername);
        GitFactory.makeCall($scope.gitHubUsername);
        $scope.gitIt = GitFactory.repos;
        $scope.gitUser = GitFactory.gitUser;
        $scope.showTable = true;
    };

}]);
