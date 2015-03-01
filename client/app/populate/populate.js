'use strict';

angular.module('rcrdlistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('populate', {
        url: '/populate',
        templateUrl: 'app/populate/populate.html',
        controller: 'PopulateCtrl'
      });
  });