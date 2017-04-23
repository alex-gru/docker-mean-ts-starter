let angular: any;    // angular library included in pug
let greeting: any;   // defined in pug (in fact a template variable fed in node backend)

const app = angular.module("greetingApp", []);

app.controller("greetingCtrl", ($scope) => {
    $scope.greeting = greeting;
    $scope.firstName = "Jane";
    $scope.lastName = "Doe";
});
