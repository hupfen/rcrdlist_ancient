'use strict';

angular.module('rcrdlistApp')
  .directive('release', function () {
    return {
      templateUrl: 'app/release/release.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });