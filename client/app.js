'use strict';

function config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
  $stateProvider
    // Example of abstract root
    .state( 'root', {
      url: '',
      abstract: true,
      views: {}
    })

    // Home (child of root)
    .state( 'root.index', {
      url: '/',
      views: {
        'content@': {
          controller: 'HomeController',
          templateUrl: 'home.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
}

function AppController ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $scope.pageTitle = toState.data.pageTitle;
  });

  $scope.data = 'Hello! Compass is a lightweight full stack javascript framework';
}

angular
  .module('app', [
    'app.home',
    // Dependencies
    'ngAnimate',
    'ngResource',
    'ui.router'
  ])
  .config(config)
  .controller('AppController', AppController);



