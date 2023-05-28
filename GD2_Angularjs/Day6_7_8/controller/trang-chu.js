function trangChuController($scope) {
    $scope.so1 = 0;
    $scope.so2 = 0;
    $scope.tong = 0;
    
    $scope.tinhTong = function() {
        $scope.tong = Number.parseInt($scope.so1) +
        Number.parseInt($scope.so2);
    }
}