'use strict';

function HomeController( $scope ) {
  var homeString = 'This is the home page';
  $scope.data = homeString;
}

angular
  .module('app.home', [])
  .controller('HomeController', ['$scope', HomeController]);

