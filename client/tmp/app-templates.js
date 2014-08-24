angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<section id=\"home\">\n" +
    "	<h1 class=\"mainTitle\">Compass</h1>\n" +
    "	<p class=\"subhead\">Lightweight full stack javascript boilerplate that makes using Mongo, Node, Angular, and Express a breeze.</p>\n" +
    "	<p>This is an example of an API service talking to a node enpoint (this will be empty if nothing is in your database):</p>\n" +
    "	<code>{{data}}</code>\n" +
    "</section>");
}]);
