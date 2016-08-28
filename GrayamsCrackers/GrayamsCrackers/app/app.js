/// <reference path="" />
/// <reference path="" />
(function () {
    var app = angular.module("myApp", ["ngRoute", "kyrosModule", "aboutMeModule", "greyzModule", "homeModule"]);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/home", { templateUrl: "app/components/home/home.html", controller: "HomeController" })
        .when("/aboutMe", { templateUrl: "app/components/aboutMe/aboutMe.html", controller: "AboutMeController" })
        .when("/greyz", { templateUrl: "app/components/greyz/greyz.html", controller:"GreyzController" })
        .when("/kyros/:id1/:id2", { templateUrl: "app/components/kyros/kyros.html", controller: "KyrosController"});
    });

    app.controller('testController', function ($scope) {
   
    });











})();