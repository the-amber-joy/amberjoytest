app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Type a color (word or hex code) in the box to see what happens. I did this while learning how to build Angular directives</p>',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'gold');
                scope.$apply(function() {
                    scope.color = "gold";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});

app.directive('shakeMe', function() {
    return {
        restrict: 'AEXC',
        replace: true,
        template: '<div class="{{class}}"><h3>Click Me!</h3></div>',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('class', 'animated shake');
                scope.$apply(function() {
                    scope.class = "animated shake";
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
