var app = angular.module('app.collaborate');

app.directive('clBasket', function(basketService) {
    return {
        restrict: 'E',
        templateUrl: 'app/collaborate/basket.html',
        controllerAs: 'basketVm',
        controller: function() {
            var vm = this;
            var items = basketService.getItems();

            vm.itemCount = function() {
                return items.length;
            };

            vm.getItems = function() {
                return items;
            };

            vm.them = items;

            vm.getTotal = function() {
                return basketService.getTotal();
            };
        }        
    };
});
