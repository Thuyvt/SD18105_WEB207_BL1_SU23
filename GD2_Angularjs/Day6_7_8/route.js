// Khởi tạo ứng dụng angularjs
// Khai báo thư viện phụ thuộc - dependences
var myApp = angular.module("myApp", ["ngRoute"]);

// Khởi tạo controller với app
myApp.controller("trangChuController", trangChuController);
myApp.controller("gioiThieuController", gioiThieuController);
myApp.controller("lienHeController", lienHeController);

// Cấu hình chuyển nội dung trang theo url
myApp.config(function ($routeProvider, $locationProvider) { 
    // Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    // Cấu hình chuyển trang
    $routeProvider
    .when("/home", {
        templateUrl: "./pages/trang-chu.html",
        controller: "trangChuController"
    })
    .when("/gioi-thieu", {
        templateUrl: "./pages/gioi-thieu.html",
        controller: "gioiThieuController"
    })
    .when("/lien-he/acc=:maSv", {
        templateUrl: "./pages/lien-he.html",
        controller: "lienHeController"
    })
    .otherwise({
        redirectTo: "/home"
     })
})