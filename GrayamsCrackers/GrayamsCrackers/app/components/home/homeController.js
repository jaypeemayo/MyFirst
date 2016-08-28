(function () {

    var app = angular.module("homeModule",[]);

    var HomeController = function ($scope) {

        $scope.Message = "Hello";

    };
    app.controller("HomeController", ["$scope", HomeController]);



}());