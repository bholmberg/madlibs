'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'compile']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/inputs', {templateUrl: 'partials/inputs.html', controller: InputsController});
    $routeProvider.when('/story', {templateUrl: 'partials/story.html', controller: StoryController});
    $routeProvider.otherwise({redirectTo: '/inputs'});
  }]);
