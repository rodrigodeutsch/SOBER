angular.module('starter')
.controller('paginaTrabalhoController', function($scope, $stateParams, $http){
	$scope.titulo = $stateParams.titulo;

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

	
})
.filter('filterTrabalho',function(){
	return function(items, titulo){
		var lista = [];
			for(var contArt = 0; contArt<items.artigos.length; contArt++){
				if(titulo == items.artigos[contArt].titulo){
					lista.push(items.artigos[contArt]);
				}
			}
			for(var contPost = 0; contPost<items.posteres.length; contPost++){
				if(titulo == items.posteres[contPost].titulo){
					lista.push(items.posteres[contPost]);
				}
			}
			for(var contEvent = 0; contEvent<items.eventos.length; contEvent++){
				if(titulo == items.eventos[contEvent].titulo){
					lista.push(items.eventos[contEvent]);
				}
			}
	return lista;
	}
});