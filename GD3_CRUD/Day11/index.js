var myApp = angular.module("JsonServerDemo", []);

myApp.controller("accountController", function ($scope, $http) {
    // Khai báo biến
    $scope.lstAccount = [];
    // Khai báo hằng số đường dẫn api
    const apiAccountUrl = "http://localhost:3000/accounts";
    // Khai báo đối tượng
    $scope.acc  = {
        id: 0,
        name: "",
        email: "",
        password: ""
    }
    $scope.viTriDuocChon = -1;

    // Gọi api lấy danh sách
    $http.get(apiAccountUrl)
    .then(function (response) { // sẽ chạy vào nếu api trả về dữ liệu
        // lấy data từ response trả về
        console.log(response);
        $scope.lstAccount = response.data;
    })
    .catch(function (error) {
        console.log(error);
    })

    // Hàm onSubmit()
    $scope.onSubmit = function (event) {
        event.preventDefault();
        if ($scope.idDuocChon == -1) {
            $http
            .post(apiAccountUrl, $scope.acc)
            .then(function () {
                // Trường hợp thành công
                $scope.lstAccount.push($scope.acc);
            })
            .catch(function (error) {
                // Trường hợp thất bại
                console.log(error);
            })
        } else {
            // Sửa
            $http
            .put(apiAccountUrl + "/" + $scope.acc.id, $scope.acc)
            .then(function () {
                $scope.viTriDuocChon = -1;
                $scope.lstAccount.splice($scope.viTriDuocChon, 1, $scope.acc);
            })
            .catch(function (error) {});
        }
       
    }
    // Hàm delete
    $scope.delete = function (index) { 
        var id = $scope.lstAccount[index].id;
        // http://localhost:3000/accounts/1
        $http
        .delete(apiAccountUrl + "/" +id)
        .then(function () {
            $scope.lstAccount.splice(index, 1);
         })
         .catch (function (error) { 
            console.log(error);
         });
    };

    // Hàm select
    $scope.select = function (index) {
        var id = $scope.lstAccount[index].id;
        $scope.viTriDuocChon = index;
        // http://localhost:3000/accounts/1
        $http
        .get(apiAccountUrl + "/" +id)
        .then(function (response) {
           console.log(response);
           $scope.acc = response.data
         })
         .catch (function (error) { 
            console.log(error);
         });
    };

});