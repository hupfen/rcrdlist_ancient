'use strict';

angular.module('rcrdlistApp')
  .controller('PopulateCtrl', function ($scope, $http) {
    //$http.get('/api/populate').success(function() {
    //});
    
    $scope.submit = function() {
      $scope.artwork = document.getElementById('artwork').files[0];
      $scope.error = null, $scope.success = null;
      var entry = {artist: $scope.artist,
                   album: $scope.album,
                   summary: $scope.summary,
                   genre: $scope.genre,
                   bandcamp: $scope.bandcamp,
                   spotify: $scope.spotify,
                   jamendo: $scope.jamendo,
                   soundcloud: $scope.soundcloud,
                   amazon: $scope.amazon,
                   itunes: $scope.itunes,
                   gplay: $scope.gplay,
                   twitter: $scope.twitter,
                   facebook: $scope.facebook,
                   youtube: $scope.youtube,
                   gplus: $scope.gplus,
                   scSocial: $scope.scSocial,
                   picker: $scope.picker,
                   bcID: $scope.bcID,
                   scID: $scope.scID,
                   jmID: $scope.jmID,
                   spID: $scope.spID,
                   date: $scope.date,
                   artwork: $scope.artwork
                  };
      $http.post('/api/populate', entry).success(function() {
        $scope.success = 'Album saved successfully';
        $scope.artist = null;
        $scope.album = null;
        $scope.summary = null;
        $scope.genre = null;
        $scope.bandcamp = null;
        $scope.spotify = null;
        $scope.jamendo = null;
        $scope.soundcloud = null;
        $scope.amazon = null;
        $scope.itunes = null;
        $scope.gplay = null;
        $scope.twitter = null;
        $scope.facebook = null;
        $scope.youtube = null;
        $scope.gplus = null;
        $scope.scSocial = null;
        $scope.picker = null;
        $scope.bcID = null;
        $scope.scID = null;
        $scope.jmID = null;
        $scope.spID = null;
        $scope.date = null;
        $scope.artwork  = null;
      }).error(function(data) {
        $scope.error = 'Something went wrong: ' + data;
      });
    };
  });