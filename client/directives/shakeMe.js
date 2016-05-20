app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World</p>',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});


// app.directive('shakeMe', ['$animate', function($animate) {
//     return {
//         restrict: 'AEC',
//         link: function(scope, element, attrs, form) {
//             element.on('click', function() {
//
//                 scope.$apply(function() {
//
//                     $animate.sibling().addClass(element, 'shake').then(function() {
//
//                         element.sibling().removeClass('shake');
//                     });
//                 });
//             });
//         }
//     };
// }]);
