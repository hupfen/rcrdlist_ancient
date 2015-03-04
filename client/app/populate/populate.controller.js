'use strict';

angular.module('rcrdlistApp')
  .controller('PopulateCtrl', function ($scope, $http) {
    $http.get('/api/populate').success(function() {
    });
  
    $scope.submit = function() {
      var entry = null;
      $http.post('/api/populate', entry).success(function() {
      });
    };
  });
