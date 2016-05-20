app.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
});


app.directive('shakeMe', ['$animate', function($animate) {
    return {
        restrict: 'AEC',
        link: function(scope, element, attrs, form) {
            element.on('click', function() {

                scope.$apply(function() {

                    $animate.sibling().addClass(element, 'shake').then(function() {

                        element.sibling().removeClass('shake');
                    });
                });
            });
        }
    };
}]);
