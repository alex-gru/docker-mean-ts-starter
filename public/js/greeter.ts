declare let greeting: any;

const app = angular.module("greetingApp", []);

app.controller("greetingCtrl", ($scope) => {

    $scope.greeting = greeting;
    $scope.name = "Jane Doe";
    $scope.description = "This is a dockerized MEAN webapp, implemented in Typescript, with full support for hot code reload and debugging with an IDE.";
});
