declare var angular: any;   // angular library included in pug
declare var greeting: any;  // defined in pug (in fact a template variable fed in node backend)

var app = angular.module("greetingApp", []);

app.controller("greetingCtrl", ($scope) => {
    $scope.greeting = greeting;
    $scope.firstName = "Jane";
    $scope.lastName = "Doe";
});
