const detailCtrl = function ($scope, $routeParams) {
    $scope.product = $scope.data.products.filter( product => product.title == $routeParams.name2)
    $scope.changeImg = (imgUrl) => $('.detail-img img').attr('src', imgUrl);
}

export default detailCtrl