'use strict';

angular.module('rcrdlistApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.open = false;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });