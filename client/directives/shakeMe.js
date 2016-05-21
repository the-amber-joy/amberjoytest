app.directive('colorText', function() {
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
        template: '<div class="{{class}}"><h3>Shake Me!</h3></div>',
        link: function(scope, elem, attrs) {
            elem.on('click', function() {
                scope.$apply(function() {
                    scope.class = 'animated shake';
                });
                elem.addClass('animated shake');
            });

            elem.on('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});

// element.bind("click" , function(e){
//    element.parent().find("a").removeClass("enabled"); // Vanilla jqLite!
//    element.addClass("enabled");
// });
