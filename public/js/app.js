'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', [
    'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        .when('/game', {
            templateUrl: 'partials/game.html',
            controller: 'Game'
        })
        .when('/highscores', {
            templateUrl: 'partials/highscores.html',
            controller: 'Highscores'
        })
        .otherwise({
            redirectTo: '/home'
        });
    $locationProvider.html5Mode(true);
});