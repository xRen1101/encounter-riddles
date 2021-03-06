'use strict';

angular.module('encounterApp.kec5.colors', [
  'ngRoute'
]);

angular.module('encounterApp.kec5.colors').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/kec5/colors', {
    templateUrl: 'resources/app/components/kec5/colors/colors.html',
    controller: 'ColorsController as vm'
  });

  $routeProvider.when('/kec5/colors/v2', {
    templateUrl: 'resources/app/components/kec5/colors/colors.html',
    controller: 'ColorsControllerv2 as vm'
  });

  $routeProvider.when('/kec5/colors/v3', {
    templateUrl: 'resources/app/components/kec5/colors/colors.html',
    controller: 'ColorsControllerv3 as vm'
  });
  
}]);