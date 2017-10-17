angular.module('starter')
.controller('resultadoBuscaController', function($scope, $stateParams, $http){

	$scope.resultado = $stateParams.item;

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;   
	}).error(function(erro){
		console.log(erro);
	});

})
.filter('buscaSecundaria', function(){
	return function(items, resultado){
		var lista = [];
		var contArtigos, contPosteres;
			for(contArtigos=0; contArtigos<items.artigos.length; contArtigos++){
				
				if(items.artigos[contArtigos].titulo == resultado){
					lista.push(items.artigos[contArtigos]);
				}
				
				if(items.artigos[contArtigos].secao == resultado){
					lista.push(items.artigos[contArtigos]);
				}
				if(items.artigos[contArtigos].grupo == resultado){
					lista.push(items.artigos[contArtigos]);
				}
				if(items.artigos[contArtigos].cod == resultado){
					lista.push(items.artigos[contArtigos]);
				}
				/*for(contAutores=0; contAutores<items.artigos[contArtigos].autores.length; contAutores++){
					if(items.artigos[contArtigos].autores[contAutores].nome.indexOf(filtro) != -1){
						lista.push(items.artigos[contArtigos].autores[contAutores].nome);
					}
					if(items.artigos[contArtigos].autores[contAutores].faculdade.indexOf(filtro) != -1){
						lista.push(items.artigos[contArtigos].autores[contAutores].facudade);
					}
				}*/ //corrigir erro nos autores
				if(items.artigos[contArtigos].debatedor == resultado){
					lista.push(items.artigos[contArtigos]);
				}
			} //fim da verificação de artigos
			
			for(contPosteres=0; contPosteres<items.posteres.length; contPosteres++){ //verificação de posteres
				
				if(items.posteres[contPosteres].titulo == resultado){
					lista.push(items.posteres[contPosteres]);
				}
				
				if(items.posteres[contPosteres].secao == resultado){
					lista.push(items.posteres[contPosteres]);
				}
				if(items.posteres[contPosteres].grupo == resultado){
					lista.push(items.posteres[contPosteres]);
				}
				if(items.posteres[contPosteres].cod == resultado){
					lista.push(items.posteres[contPosteres]);
				}
				/*for(contAutores=0; contAutores<items.posteres[contPosteres].autores.length; contAutores++){
					if(items.posteres[contPosteres].autores[contAutores].nome.indexOf(filtro) != -1){
						lista.push(items.posteres[contPosteres].autores[contAutores].nome);
					}
					if(items.posteres[contPosteres].autores[contAutores].faculdade.indexOf(filtro) != -1){
						lista.push(items.posteres[contPosteres].autores[contAutores].facudade);
					}
				}*/
				if(items.posteres[contPosteres].debatedor == resultado){
					lista.push(items.posteres[contPosteres]);
				}
			} //fim da verificação de posteres  //nao funciona parte das palestras, mas funciona o resto, erro nesta parte::::::::::: CORRIGIR
		return lista;
	};
});