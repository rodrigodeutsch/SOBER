angular.module('starter')
.controller('buscaController', function($scope, $http){

	data = [];
	//$scope.lista = [];
	//$scope.encontrados = [];

	$http.get('js/database.json') //recupera dados do json
	.success(function(dadosDB){
		$scope.data = dadosDB;    
	}).error(function(erro){
		console.log(erro);
	});
})
.filter('buscaPrincipal', function(){
	return function (items, filtro){
		var lista = [];
		var contArtigos, contEventos, contPosteres, i, contLista, contAutores;
		var verifica;
		if(filtro == ''){
			lista = []; //se o campo estiver vazio, limpa a lista
		} //funcionando
		else{
			filtro = filtro.toUpperCase();
			for(contArtigos=0; contArtigos<items.artigos.length; contArtigos++){
				
				if(items.artigos[contArtigos].titulo.indexOf(filtro) != -1){
					lista.push(items.artigos[contArtigos].titulo);
				}
				
				if(items.artigos[contArtigos].secao.indexOf(filtro) != -1){
					lista.push(items.artigos[contArtigos].secao);	
				}
				if(items.artigos[contArtigos].grupo.indexOf(filtro) != -1){
					lista.push('Grupo ' + items.artigos[contArtigos].grupo);	
				}
				if(items.artigos[contArtigos].cod.indexOf(filtro) != -1){
					lista.push(items.artigos[contArtigos].cod);	
				}
				/*for(contAutores=0; contAutores<items.artigos[contArtigos].autores.length; contAutores++){
					if(items.artigos[contArtigos].autores[contAutores].nome.indexOf(filtro) != -1){
						lista.push(items.artigos[contArtigos].autores[contAutores].nome);
					}
					if(items.artigos[contArtigos].autores[contAutores].faculdade.indexOf(filtro) != -1){
						lista.push(items.artigos[contArtigos].autores[contAutores].facudade);
					}
				}*/ //corrigir erro nos autores
				if(items.artigos[contArtigos].debatedor.indexOf(filtro) != -1){
					lista.push(items.artigos[contArtigos].debatedor);
				}
			} //fim da verificação de artigos
			
			for(contPosteres=0; contPosteres<items.posteres.length; contPosteres++){ //verificação de posteres
				
				if(items.posteres[contPosteres].titulo.indexOf(filtro) != -1){
							lista.push(items.posteres[contPosteres].titulo);
				}
				
				if(items.posteres[contPosteres].secao.indexOf(filtro) != -1){
					lista.push(items.posteres[contPosteres].secao);	
				}
				if(items.posteres[contPosteres].grupo.indexOf(filtro) != -1){
					lista.push('Grupo ' + items.posteres[contPosteres].grupo);	
				}
				if(items.posteres[contPosteres].cod.indexOf(filtro) != -1){
					lista.push(items.posteres[contPosteres].cod);	
				}
				/*for(contAutores=0; contAutores<items.posteres[contPosteres].autores.length; contAutores++){
					if(items.posteres[contPosteres].autores[contAutores].nome.indexOf(filtro) != -1){
						lista.push(items.posteres[contPosteres].autores[contAutores].nome);
					}
					if(items.posteres[contPosteres].autores[contAutores].faculdade.indexOf(filtro) != -1){
						lista.push(items.posteres[contPosteres].autores[contAutores].facudade);
					}
				}*/
				if(items.posteres[contPosteres].debatedor.indexOf(filtro) != -1){
					lista.push(items.posteres[contPosteres].debatedor);	
				}
			} //fim da verificação de posteres  //nao funciona parte das palestras, mas funciona o resto, erro nesta parte::::::::::: CORRIGIR
		}

	return lista;			
	};
});
	








	/*$scope.buscar = function(filtro, lista){
		var i;
		if(filtro == ''){
			$scope.lista = null; //se o campo estiver vazio, limpa a lista
		}
		else{
			for(i=0;i<$scope.data.artigos.length; i++){
				$scope.lista.push("ENSADDJNSADJAS");		
			}
		}
		return $scope.lista;
	}
	
});*/