'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $firebase, $timeout, $mdSidenav, $log, $mdDialog, $sce) {
  
  var ref = new Firebase('https://lep-rcrdlist.firebaseio.com/albums');
  var sync = $firebase(ref);
  
  $scope.spotify = null;
  $scope.bandcamp = null;

  // if ref points to a data collection
  $scope.releases = sync.$asArray();
  
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
  
  $scope.curators = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Colophon')
        .content('Site ')
        .ariaLabel('Password notification')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  
  $scope.colophon = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Colophon')
        .content('Site ')
        .ariaLabel('Password notification')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
  
  //<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>, <a href="http://www.danielbruce.se" title="Daniel Bruce">Daniel Bruce</a>, <a href="http://www.simpleicon.com" title="SimpleIcon">SimpleIcon</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>         is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>
  
  $scope.playAlbum = function(album) {
    if (album.spotify) {
      $scope.spotify = $sce.trustAsResourceUrl('https://embed.spotify.com/?uri=' + album.spotify);
      $scope.bandcamp = null;
    }
    if (album.bandcamp) {     
      $scope.spotify = null;
      $scope.bandcamp = $sce.trustAsResourceUrl('http://bandcamp.com/EmbeddedPlayer/album=' + album.bandcamp +'/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/');
    }
  };

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                      .then(function(){
                          $log.debug("toggle left is done");
                      });
  };
  

  })
.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
                      .then(function(){
                        $log.debug("close LEFT is done");
                      });
  };
});