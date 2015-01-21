'use strict';

angular.module('rcrdlistApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'firebase'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });