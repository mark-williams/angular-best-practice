angular.module('app.layout')
    .directive('lyNavigation', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/navigation.html'        
        };
    });