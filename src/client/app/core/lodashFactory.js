(function () {
    'use strict';

    angular.module('app.core')
        .factory('_', function($window) {
            return $window._;
        });

})();