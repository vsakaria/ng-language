'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('Game', function($scope, $http, QA, $location) {
    $scope.round = 1;
    $scope.playing = true;

    $scope.answers = QA.answers();
    $scope.question = QA.question();

    $scope.submitAnswer = function(question, answer){
      if($scope.round <= 3) {
        if(question.en == answer.en){
          $scope.round++;

          $scope.answers = QA.answers();
          $scope.question = QA.question();

          if($scope.round == 4){
            $scope.playing = false;
            $scope.message = "Amazing well done!"
            $scope.score = ($scope.round-1) * 1000;
          };
        }
        else {
          $scope.playing = false;
          $scope.message = "Sorry Wrong Answer :("
          $scope.score = ($scope.round-1) * 1000;
        };
      };
    };

    $scope.submitScore = function(name){
      $http({
        method: 'POST',
        url: 'api/highscores',
        data: {"name": $scope.name, "score": $scope.score}
      })
      .success(function(data, status, headers, config){
        $location.path('/highscores');
      });
    };
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

