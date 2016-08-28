(function () {

    var app = angular.module("greyzModule", []);

    var GreyzController = function ($scope) {
        $scope.ToDoList = "WASH!";

    };
    app.controller("GreyzController", ["$scope", GreyzController])





}());