(function () {
    'use strict';

    var core = angular.module('app.core');
    core.factory('basketService', ['_', function (_) {
        var basketItems = [];
        return {
            addToBasket: function (item) {
                var basketItem = _.find(basketItems, function(i) { return i.id === item.id});
                if (basketItem) {
                    basketItem.quantity++;
                    return;
                }

                item.quantity = 1;
                basketItems.push(item);
            },
            getItems: function () {
                return basketItems;
            },
            getTotal: function() {
                var total = 0;
                total = _.reduce(basketItems, function(total, item) {
                    return total + item.quantity * item.price;
                }, 0);

                return total;
            }
        };
    }]);
})();