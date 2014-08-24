'use strict';

function InputBox() {
  return {
      restrict: 'ECA',
      transclude: true,
      scope: {},
      templateUrl: 'inputBox/inputBox.tpl.html'
    };
}

angular
    .module('directives.InputBox', [])
    .directive('inputbox', InputBox);
