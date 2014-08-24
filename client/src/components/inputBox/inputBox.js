'use strict';

function InputBox() {
  return {
      restrict: 'ECA',
      transclude: true,
      scope: {},
      template: '<input placeholder="Hello world!"/>'
    };
}

angular
    .module('directive.InputBox', [])
    .directive('inputBox', InputBox);
