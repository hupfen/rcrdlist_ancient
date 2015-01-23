'use strict';

angular.module('rcrdlistApp')
  .directive('rcrdRelease', function () {
    return {
      templateUrl: 'app/release/release.html',
      restrict: 'EA',
      scope: {
      release: '=release'
      }
    };
  });