'use strict';

/* Controllers */


function InputsController($scope, StoryService, InputService) {
    $scope.InputService = InputService;
}
InputsController.$inject = ['$scope', 'StoryService', 'InputService'];


function StoryController($scope, StoryService, InputService) {
    $scope.StoryService = StoryService;
    $scope.inputs = InputService.inputs;
}
StoryController.$inject = ['$scope', 'StoryService', 'InputService'];
