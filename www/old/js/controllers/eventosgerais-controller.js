angular.module('starter').controller('eventosGeraisController', function($scope, $http){
	
	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});



});