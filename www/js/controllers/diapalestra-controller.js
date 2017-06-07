angular.module('starter').controller('diaPalestraController', function($scope, $stateParams, $http){

	$scope.diaPalestra = $stateParams.dia;

	$scope.data = [];

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

})
.filter('filtroDia', function(){
	return function(items, diaPalestra){
		var lista = [];
		var i;
		if(items.length != undefined){
			for(i=0;i<items.length;i++){
				if(items[i].dia == diaPalestra){
					lista.push(items[i]);
				}
			}
		}
	return lista;
	};
});