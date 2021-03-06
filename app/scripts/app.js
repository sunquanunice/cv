'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-carousel',
    'pascalprecht.translate',
    'duScroll'
  ])
    .config([ '$translateProvider', function($translateProvider) {
      $translateProvider.preferredLanguage(navigator.language);
      $translateProvider.useStaticFilesLoader({
        prefix: '/langs/',
        suffix: '.json'
      });

      $translateProvider.useLocalStorage();
    }])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/infos', {
        templateUrl : 'views/infos.html',
        controller : 'InfosCtrl'
      })
      .when('/experiences', {
        templateUrl : 'views/experiences.html',
        controller : 'ExperiencesCtrl'
      })
      .when('/education', {
        templateUrl : 'views/education.html',
        controller : 'EducationCtrl'
      })
      .when('/competences', {
        templateUrl : 'views/competences.html',
        controller : 'CompetencesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/flexslider', {
          templateUrl : "views/flexslider.html",
          controller : 'FlexsliderCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
