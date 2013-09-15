define(['angular'] , function (angular) {
  return angular.module('app' , [])

  .controller('AppController', function AppController($scope) {
    $scope.name = "World!";
  });
});