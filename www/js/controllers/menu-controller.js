angular.module('starter').controller('menuController', function($scope, $location, $state){

	$scope.go = function(path) {
    	$state.go(path);
  }
});