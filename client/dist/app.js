"use strict";function config($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/"),$stateProvider.state("root",{url:"","abstract":!0,views:{}}).state("root.index",{url:"/",views:{"content@":{controller:"HomeController",templateUrl:"home.html"}},data:{pageTitle:"Home"}})}function AppController($scope){$scope.$on("$stateChangeSuccess",function(event,toState){$scope.pageTitle=toState.data.pageTitle}),$scope.data="Hello! Compass is a lightweight full stack javascript framework"}angular.module("app",["app.home","ngAnimate","ngResource","ui.router"]).config(config).controller("AppController",AppController),angular.module("templates-dist",["../client/home/home.html","../client/index.html"]),angular.module("../client/home/home.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("../client/home/home.html","this is the home template")}]),angular.module("../client/index.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("../client/index.html",'<!DOCTYPE html>\n<html>\n  <head>\n    <title ng-bind="pageTitle"></title>\n\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <!-- font awesome from BootstrapCDN -->\n    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">\n\n    <!-- font from google -->\n    <link href=\'http://fonts.googleapis.com/css?family=Roboto:400,500\' rel=\'stylesheet\' type=\'text/css\'>\n\n    <!-- jquery CDN -->\n    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>\n\n    <script type="text/javascript" src="libs/angular/angular.js"></script>\n    <script type="text/javascript" src="home/homeController.js"></script>\n    <!-- <script type="text" src="home/home.html"></script> -->\n    <script type="text/javascript" src="libs/angular-animate/angular-animate.js"></script>\n    <script type="text/javascript" src="libs/angular-resource/angular-resource.js"></script>\n    <script type="text/javascript" src="libs/angular-ui-router/angular-ui-router.js"></script>\n    <script type="text/javascript" src="app.js"></script>\n\n  </head>\n  <body ng-app="app" ng-controller="AppController">\n    <div class="container-fluid">\n        <div class="row">\n\n          <section id="home" ui-view="home"></section>\n\n        </div>\n    </div>\n  </body>\n</html>\n')}]);