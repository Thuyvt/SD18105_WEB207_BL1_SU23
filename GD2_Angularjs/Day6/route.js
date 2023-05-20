// Khởi tạo ứng dụng angularjs
// Khai báo thư viện phụ thuộc - dependences
var myApp = angular.module("myApp", ["ngRoute"]);

// Khởi tạo controller với app
myApp.controller("trangChuController", trangChuController);

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
        templateUrl: "./pages/gioi-thieu.html"
    })
    .when("/lien-he", {
        templateUrl: "./pages/lien-he.html"
    })
    .otherwise({
        redirectTo: "/home"
     })
})