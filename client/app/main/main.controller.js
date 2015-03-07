'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.releases = [];
    $http.get('/api/releases').success(function(releases) {
      $scope.releases = releases.map(function(album) {
        //format: hotel-neon-by-hotel-neon
        album.dateStr = new Date(album.date).valueOf();
        album.human = album.artist.dasherize() + '-by-' + album.album.dasherize();
        return album;
      });
    });
  });
