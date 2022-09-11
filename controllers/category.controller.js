const categoryCtrl = function ($scope, $routeParams) {
    if ($routeParams.name == 'sell') {
        $scope.productList = $scope.data.products.filter( product => product.status == 'For Sell')
    } else if ($routeParams.name == 'free') {
        $scope.productList = $scope.data.products.filter( product => product.status == 'Donate')
    } else {
        $scope.productList = $scope.data.products.filter( product => product.categoryId == $routeParams.name)
    }
}

export default categoryCtrl