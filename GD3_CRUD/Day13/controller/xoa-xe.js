function XoaXeController ($scope, $http, $routeParams) {
    var id = $routeParams.xeid;
    $scope.xe = {
        id: "",
        ten: "",
        loai: "",
        hang: "",
        gia: 0
    }
    $http.get("http://localhost:3000/xes/" +id).then(function (response) {
        $scope.xe = response.data
    })

    $scope.xacNhanXoa = function () {
        $http.delete("http://localhost:3000/xes/" + id).then(function () {
            alert("Xóa thành công");
        })
    }
}