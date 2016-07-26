var app = angular.module('app.collaborate');
app.controller('ProductsCtrl', ['productService', 'basketService', function(productService, basketService) {
    var vm = this;
    vm.products = productService.getProducts();
    vm.addToBasket = basketService.addToBasket;
}]);