'use strict';

/* Directives */


angular.module('myApp.directives', ['ng']).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);



