var myApp = angular.module("JsonServerDemo", []);

myApp.controller("accountController", function ($scope, $http) {
    $scope.lstAccount = [];
    // Khai báo hằng số đường dẫn api
    const apiAccountUrl = "http://localhost:3000/accounts";
    // Gọi api lấy danh sách
    $http.get(apiAccountUrl)
    .then(function (response) { // sẽ chạy vào nếu api trả về dữ liệu
        // lấy data từ response trả về
        $scope.lstAccount = response.data;
    })
    .catch(function (error) {
        console.log(error);
    })
});