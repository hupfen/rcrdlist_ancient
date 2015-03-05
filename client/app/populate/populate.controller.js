'use strict';

angular.module('rcrdlistApp')
  .controller('PopulateCtrl', function ($scope, $http) {
    $http.get('/api/populate').success(function() {
    });
  
    $scope.submit = function() {
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
                   spID: $scope.spID
                  };
      $http.post('/api/populate', entry).success(function() {
      });
    };
  });
