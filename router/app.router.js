const appRouter = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../components/main/main.htm'
        })
        .when('/categories/:name', {
            templateUrl : '../components/main/products.htm'
        })
        .when('/categories/:name1/:name2', {
            templateUrl : '../components/main/detail.htm'
        })
        .when("/registry", {
            templateUrl: "../components/main/registry.htm"
        })
        .when("/login", {
            templateUrl: "../components/main/login.htm",
        })
        .when("/cart", {
            templateUrl: "../components/main/cart.htm"
        })
}

export default appRouter