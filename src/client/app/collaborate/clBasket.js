var app = angular.module('app.collaborate');

app.directive('clBasket', function(basketService) {
    return {
        restrict: 'E',
        templateUrl: 'app/collaborate/basket.html',
        controller: function($scope) {
            var items = basketService.getItems();

            $scope.itemCount = function() {
                return items.length;
            };

            $scope.getItems = function() {
                return items;
            };

            $scope.getTotal = function() {
                return basketService.getTotal();
            };
        }
    };
});
