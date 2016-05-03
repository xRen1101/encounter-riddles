'use strict';

angular.module('encounterApp.kec5.countdown', [
  'ngRoute'
]);

angular.module('encounterApp.kec5.countdown').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/kec5/countdown', {
    templateUrl: 'resources/app/components/kec5/countdown/countdown.html',
    controller: 'CountdownController as vm'
  });
  
}]);