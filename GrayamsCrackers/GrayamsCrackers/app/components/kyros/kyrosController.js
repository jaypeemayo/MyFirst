(function () {

    var app = angular.module("kyrosModule",[])

    app.controller("KyrosController", ["$scope", "$routeParams", function ($scope, $routeParams) {
        $scope.Weee = $routeParams.id1;
        $scope.Weee2 = $routeParams.id2;
    }]);



}());