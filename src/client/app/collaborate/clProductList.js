var app = angular.module('app.collaborate');

app.directive('clProductList', function(basketService) {
    return {
        restrict: 'E',
        templateUrl: 'app/collaborate/productList.html',
        controller: function(productService, basketService) {
            var vm = this;
            vm.products = productService.getProducts();
            vm.addToBasket = basketService.addToBasket;
        },
        controllerAs: 'vm'
    };
});

