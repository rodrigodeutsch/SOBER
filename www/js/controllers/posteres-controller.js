angular.module('starter').controller('posteresController', function($scope, $http){

	$scope.data = [];
	$scope.dias = [];
	
	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

});