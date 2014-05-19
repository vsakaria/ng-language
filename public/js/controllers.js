'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('AppCtrl',function($scope, $http) {
    $http({
      method: 'GET',
      url: '/api/name'
    })
    .success(function(data, status, headers, config) {
      $scope.name = data.name;
    })
    .error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    });
  })

  .controller('Game', function($scope, RandWords) {

    $scope.gamewords =  RandWords.get();
    $scope.random = function(){ return Math.floor((Math.random() * 3) + 0) };

    /* ===== */
    var submitScore = function(name, score) {

    }
    /*=====*/
  })

  .controller('Highscores', function($scope, $http){
    $http({
      method: 'GET',
      url: 'api/highscores'
    })
    .success(function(data, status, headers, config){
      $scope.highscores = data;
    });

  });

