(function() {
    'use strict';

    var products = [
        { id: 1000, description: 'Cheese and Tomato Sandwich', price: 0.85 },
        { id: 1001, description: 'Chicken Salad Sandwich', price: 1.19 },
        { id: 1002, description: 'Tuna Mayo and Sweetcorn Sandwich', price: 0.99 },
        { id: 1003, description: 'Egg Mayonnaise Sandwich', price: 0.85 },
        { id: 1004, description: 'Mixed Sald Pot', price: 1.50 }
    ];

    var core = angular.module('app.core');
    core.factory('productService', function() {
        return {
            getProducts: function() {
                return products;
            }
        }
    });
})();