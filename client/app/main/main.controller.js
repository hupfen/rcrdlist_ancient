'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.releases = [];
    $http.get('/api/releases').success(function(releases) {
      $scope.releases = releases.map(function(album) {
        //format: hotel-neon-by-hotel-neon
        album.dateStr = new Date(album.date).valueOf();
        album.human = album.album.replace(/&/g, 'and').replace(/[\.,-\/#!$%\^\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').dasherize() + '-by-' + album.artist.replace(/&/g, 'and').replace(/[\.,-\/#!$%\^\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').dasherize();
        return album;
      }).filter(function(rel) {
        return rel.dateStr < new Date().valueOf();
      });
    });
  });
