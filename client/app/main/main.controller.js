'use strict';

angular.module('rcrdlistApp')
  .controller('MainCtrl', function ($scope, $firebase, $timeout, $mdSidenav, $log) {
  
  var ref = new Firebase('https://lep-rcrdlist.firebaseio.com/albums');
  var sync = $firebase(ref);

  // if ref points to a data collection
  $scope.releases = sync.$asArray();

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