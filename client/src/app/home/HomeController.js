/*global angular:false */
'use strict';

function HomeController ($scope, $location, API) {
  console.log(API);

  API.endpoint.get(function(data) {
    $scope.data = data;
  });
}

angular
  .module('app.home', [
    // Components
    'services.API',
    'directives.InputBox'
  ])
  .controller('HomeController', HomeController);





