app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Type a color (word or hex code) in the box to see what happens. I did this while learning how to build Angular directives</p>',
        link: function(scope, elem, attrs) {
            elem.on('click', function() {
                elem.css('background-color', 'gold');
                scope.$apply(function() {
                    scope.color = "gold";
                });
            });
            elem.on('mouseover', function() {
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
            elem.on('click', function() {
                scope.$apply(function() {
                    scope.class = "animated shake";
                });
                elem.addClass('animated shake');
            })
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                elem.removeClass({{class}});
                scope.$apply(function() {
                    scope.class = "";
                });
            });



            // element.bind("click" , function(e){
            //    element.parent().find("a").removeClass("enabled"); // Vanilla jqLite!
            //    element.addClass("enabled");
            // });


            elem.on('mouseover', function() {
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
