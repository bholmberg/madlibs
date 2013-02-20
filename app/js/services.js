'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').factory('StoryService', function () {
    return {
        activeStory:{},
        stories:[
            {
                name:'Test story',
                body:'The {{inputs.adjective}} {{inputs.noun}} took the {{inputs.animal}} to the park and heard a {{inputs.noise}}.'
            },
            {
                name:'Test story 2',
                body:'The next day the {{inputs.animal}} woke up before the {{inputs.adjective}} {{inputs.noun}} when it heard the {{inputs.noise}} from the park in the previous story..'
            }
        ]
    };
}).factory('InputService', function () {
    return {
        inputs:{}
    };
});

