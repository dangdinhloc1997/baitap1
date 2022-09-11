const appController = function ($scope, $http) {
    // Validate
    $scope.checkValid = (comfirmPass, pass) => {
        $('input.ng-invalid').addClass('input-invalid');
        if (comfirmPass == pass) {
            console.log('comfirm')
        } else {
            $('#comfirmPass').addClass('input-comfirm-invalid')
        }

        if ($('input.ng-invalid').length == 0) {
            if (comfirmPass == pass) {
                return 1
            } else {
                $('#comfirmPass').addClass('input-comfirm-invalid');
                return 0
            }
        } else return 0;
    }
    $scope.resetComfirmPass = () => $('#comfirmPass').removeClass('input-comfirm-invalid');

    // Registry
    $scope.onSubmit = (fullname, email, phone, pass, comfirmPass) => {
        if ($scope.checkValid(comfirmPass, pass)) {
            $scope.newUserData = { fullname, email, phone, pass };
            $scope.users = (JSON.parse(localStorage.getItem('users'))) || [];
            if ($scope.users.filter((el) => el.email == $scope.newUserData.email).length == 0) {
                $scope.users.push($scope.newUserData);
                localStorage.setItem('users', JSON.stringify($scope.users));
                alert('Chúc mừng bạn đăng kí thành công');
                window.location.href = "/#!login"
            } else {
                alert('Email đã tồn tại. vui lòng nhập email khác');
            }
        }
    }
    // Login
    if ($scope.login) {
        window.location.href = "#/!"
    }
    $scope.loginSubmit = (email, pass) => {
        $scope.users = JSON.parse(localStorage.getItem('users'));
        if ($scope.users.filter(user => user.email == email && user.pass == pass) == 0) {
            alert('Email hoặc mật khẩu không đúng');
        } else {
            $scope.login = true;
            window.location.href = "#/!"
        }
    }
    // CART
    $scope.cart = (JSON.parse(sessionStorage.getItem('cartItem'))) || [];
    $scope.countItem = 0   
    $scope.addToCart = (item) => {
        if ($scope.cart.filter( el => el == item).length == 0) {
            item.count = 1
            $scope.cart.push(item)
            sessionStorage.setItem('cartItem',JSON.stringify($scope.cart))   
            $scope.countItem += 1
        } else {
            item.count ++
            $scope.countItem += 1
        }
    }

    
    $scope.clearCartItem = (item) => {
        $scope.cart.indexOf(item)
        $scope.cart.splice($scope.cart.indexOf(item),1)
        sessionStorage.setItem('cartItem',JSON.stringify($scope.cart))
    }
    console.log($scope.cartItem)
    //API
    $http.get('../data.json')
        .then(Response => $scope.data = angular.fromJson(Response.data));
}

export default appController