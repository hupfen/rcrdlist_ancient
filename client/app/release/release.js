'use strict';

angular.module('rcrdlistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('release', {
        url: '/release/:id/*human',
        templateUrl: 'app/release/release.html',
        controller: 'ReleaseCtrl'
      });
  });