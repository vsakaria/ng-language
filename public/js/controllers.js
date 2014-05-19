'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('AppCtrl',function($scope, $http) {
  })

  .controller('Game', function($scope, RandWords, ShuffleArray, $http) {
    $scope.round = 1;
    $scope.playing = true;

    var answersBucket = RandWords.get();
    var questionsBucket = answersBucket;
    var questionToRemove;

    function setupQA() {
      $scope.answers = ShuffleArray.shuffle(answersBucket).slice(0,3);
      questionToRemove = questionsBucket.indexOf($scope.answers[Math.floor(Math.random() * 3)]);
      $scope.question = questionsBucket.splice(questionToRemove, 1)[0]
    };
    setupQA();

    $scope.submitAnswer = function(question, answer){
      if($scope.round <= 3) {
        if(question.en == answer.en){
          $scope.round++;

          setupQA();

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

