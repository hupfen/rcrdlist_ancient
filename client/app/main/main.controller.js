'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.releases = [];
    $http.get('/api/releases').success(function(releases) {
      $scope.releases = releases;
    });
  });
