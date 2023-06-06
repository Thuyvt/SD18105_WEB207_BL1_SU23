
// Khai báo app
var app = angular.module('appXe', ['ngRoute']);

// Khai báo controller
app.controller('TrangChuController', TrangChuController);
app.controller('ThemXeController', ThemXeController);
app.controller('SuaXeController', SuaXeController);
app.controller('XoaXeController', XoaXeController);

// Cấu hình route
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider
    .when("/xes", {
        templateUrl: './page/trang-chu.html',
        controller: 'TrangChuController'
    })
    .when("/lien-he", {
        templateUrl: './page/lien-he.html',
    })
    .when("/xes/add", {
        templateUrl: './page/them-xe.html',
        controller: 'ThemXeController'
    })
    .when("/xes/delete/:xeid", {
        templateUrl: './page/xoa-xe.html',
        controller: 'XoaXeController'
    })
    .when("/xes/edit/:id", {
        templateUrl: './page/sua-xe.html',
        controller: 'SuaXeController'
    })
    .otherwise({ redirectTo: "/xes"})

}); 