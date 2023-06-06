function SuaXeController ($http, $scope, $routeParams) {

    var id = $routeParams.id;
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

    $scope.xacNhanSua = function () {
        $http.put("http://localhost:3000/xes/" + id, $scope.xe).then(function () {
            alert("Sửa thành công");
        })
    }
}