'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $firebase, $timeout, $mdSidenav, $log, $mdDialog) {
  
  var ref = new Firebase('https://lep-rcrdlist.firebaseio.com/albums');
  var sync = $firebase(ref);

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
  
  $scope.playAlbum = function(album) {
    console.log(album);
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