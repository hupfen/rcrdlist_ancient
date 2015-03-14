'use strict';

angular.module('rcrdlistApp')
  .controller('ReleaseCtrl', function ($scope, $stateParams, $http) {
    var releaseId = $stateParams.id;
    $http.get('/api/releases/'+releaseId).success(function(release) {
      $scope.album = release;
    });
  });
