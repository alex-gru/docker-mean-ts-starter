declare let greeting: any;

const app = angular.module("greetingApp", []);

app.controller("greetingCtrl", ($scope) => {

    $scope.greeting = greeting;
    $scope.firstName = "Jane";
    $scope.lastName = "Doe";
});
