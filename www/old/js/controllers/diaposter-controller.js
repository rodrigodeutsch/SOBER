angular.module('starter').controller('diaPosterController', function($scope, $stateParams, $http){

	$scope.diaPoster = $stateParams.dia;

	$scope.data = [];

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

})
.filter('filtroDia', function(){
	return function(items, diaPoster){
		var lista = [];
		var i;
		for(i=0;i<items.length;i++){
			if(items[i].dia == diaPoster){
				lista.push(items[i]);
			}
		}
	return lista;
	};
});