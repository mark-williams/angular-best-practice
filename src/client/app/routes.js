(function() {
    'use strict';

    var app = angular.module('app');
    app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'app/fruit/fruit.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('collbaorate', {
            url: '/collaborate',
            templateUrl: 'app/collaborate/collaborate.html'
        });

});

})();