function TrangChuController($scope, $http) {
    $scope.lstXe = [];

    $http.get("http://localhost:3000/xes")
    .then (function (response) {
        $scope.lstXe = response.data
    })
    .catch (function (error) {} );
}