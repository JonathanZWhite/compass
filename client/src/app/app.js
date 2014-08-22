  'use strict';

function config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
  $stateProvider
    // Example of abstract root
    .state( 'root', {
      url: '',
      abstract: true,
      views: {}
    })

    // Home (child of root)
    .state( 'root.index', {
      url: '/home',
      views: {
        'content@': {
          controller: 'HomeController',
          templateUrl: '../client/src/app/home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    });
}

function AppController ( $scope, $location, API) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $scope.pageTitle = toState.data.pageTitle;
  });
}

angular
  .module('app', [
    // Modules
    'app.home',
    // Components
    'services.API',
    // Templates
    'templates-dist',
    // Dependencies
    'ngAnimate',
    'ngResource',
    'ui.router'
  ])
  .config(config)
  .controller('AppController', AppController);



