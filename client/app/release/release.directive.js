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
          var stream = this.release.stream || {bandcamp: this.bandcampStream, 
                                               soundcloud: this.soundcloudStream,
                                               spotify: this.spotifyStream};
          $scope.$parent.playAlbum(stream);
        };
    }
    };
  });