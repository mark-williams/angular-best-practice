(function() {
    'use strict';

    var app = angular.module('app');
    app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'app/fruit/fruit.html'
        })
        
        .state('collaborate', {
            url: '/collaborate',
            templateUrl: 'app/collaborate/collaborate.html'
        });
    });

})();