'use strict';

angular.module('rcrdlistApp')
  .directive('album', function () {
    return {
      templateUrl: 'app/album/album.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });