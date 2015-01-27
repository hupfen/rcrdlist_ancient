'use strict';

angular.module('rcrdlistApp')
  .directive('rcrdRelease', function () {
    return {
      templateUrl: 'app/release/release.html',
      restrict: 'EA',
      controller: function($scope) {
        $scope.showAbout = function(ev) {

        };
        
        $scope.playAlbum = function() {
          $scope.$parent.playAlbum(this.release.stream);
        };
    }
    };
  });