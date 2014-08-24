angular.module('templates-components', ['inputBox/inputBox.tpl.html']);

angular.module("inputBox/inputBox.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("inputBox/inputBox.tpl.html",
    "<input placeholder=\"This is a directive\" />");
}]);
