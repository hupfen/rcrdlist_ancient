'use strict';

angular.module('rcrdlistApp')
  .directive('rcrdRelease', function () {
    return {
      templateUrl: 'app/release/release.html',
      restrict: 'EA',
      controller: function($scope, $mdDialog) {
        $scope.showAbout = function(ev) {
          $mdDialog.show(
            $mdDialog.alert()
              .title('This is an alert title')
              .content('You can specify some description text in here.')
              .ariaLabel('Password notification')
              .ok('Got it!')
              .targetEvent(ev)
          );
        };
        
        $scope.playAlbum = function() {
          $scope.$parent.playAlbum(this.release);
        };
    }
    };
  });