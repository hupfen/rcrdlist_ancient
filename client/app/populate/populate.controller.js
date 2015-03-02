'use strict';

angular.module('rcrdlistApp')
  .controller('PopulateCtrl', function ($scope, $http) {
    $http.get('/api/populate').success(function() {
    });
  });
