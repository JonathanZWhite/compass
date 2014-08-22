'use strict';

function HomeController ($scope, $location, API) {
  console.log(API);

  API.endpoint.get(function(data) {
    console.log(data);
  });

}

angular
  .module('app.home', [
    // Templates
    'templates-dist',
    // Components
    'services.API'
  ])
  .controller('HomeController', HomeController);





