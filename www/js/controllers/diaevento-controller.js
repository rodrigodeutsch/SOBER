angular.module('starter').controller('diaEventoController', function($scope, $stateParams, $http){

	$scope.diaEvento = $stateParams.dia;

	$scope.data = [];

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

})
.filter('filtroDia', function(){
	return function(items, diaEvento){
		var lista = [];
		var i;
		for(i=0;i<items.length;i++){
			if(items[i].dia == diaEvento){
				lista.push(items[i]);
			}
		}
	return lista;
	};
});