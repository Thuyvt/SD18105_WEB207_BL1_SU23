function gioiThieuController($scope) {
    $scope.svArray = [
        {  ma: "ph1234",
            ten: "Nguyễn Văn A",
            lab: 3,
            asm: 4,
            trangThai: false
        },
        {  ma: "ph2345",
           ten: "Nguyễn Văn B",
           lab: 9,
           asm: 10,
           trangThai: true
    }
    ];
    // khai báo đối tượng
    $scope.sinhVien = {
        ma: "",
        ten: "",
        lab: 0,
        asm: 0,
        trangThai: false
    }
    $scope.them = function () {
        var item = {
            ma: $scope.sinhVien.ma,
            ten: $scope.sinhVien.ten,
            lab: $scope.sinhVien.lab,
            asm: $scope.sinhVien.asm,
            trangThai: $scope.kiemTra($scope.sinhVien.lab, $scope.sinhVien.asm)
        }
        // thêm đối tượng sinhVien vào svArray
        $scope.svArray.push(item);
    }
    
    $scope.kiemTra = function (diem1, diem2) {
        var tb = (diem1 + diem2)/3;
        if (tb <= 5) {
            return false;
        } else {
            return true;
        }
    }
}