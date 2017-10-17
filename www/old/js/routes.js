angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('menu');

$stateProvider
.state('menu', {
	url: '/menu',
	templateUrl: 'templates/menu.html',
	controller: 'menuController'
})
.state('busca', {
	url: '/busca',
	templateUrl: 'templates/busca.html',
	controller: 'buscaController'
})
.state('apresentacoes', {
	url: '/apresentacoes',
	templateUrl: 'templates/apresentacoes.html',
	controller: 'apresentacoesController'
})
.state('diapalestra', {
	url: '/diapalestra/:dia',
	templateUrl:'templates/diapalestra.html',
	controller: 'diaPalestraController'
})
.state('eventosGerais', {
	url:'/eventosGerais',
	templateUrl:'templates/eventosgerais.html',
	controller: 'eventosGeraisController'
})
.state('palestras', {
	url: '/palestras',
	templateUrl:'templates/palestras.html',
	controller: 'palestrasController'
})
.state('resultadoBusca', {
	url: '/resultadoBusca/:item',
	templateUrl:'templates/resultadoBusca.html',
	controller:'resultadoBuscaController'
})
.state('paginaTrabalho', {
	url: '/paginaTrabalho/:titulo',
	templateUrl:'templates/paginaTrabalho.html',
	controller:'paginaTrabalhoController'
})
.state('diaevento', {
	url:'/diaevento/:dia',
	templateUrl: 'templates/diaevento.html',
	controller: 'diaEventoController'
})
.state('posteres', {
	url:'/posteres',
	templateUrl:'templates/posteres.html',
	controller:'posteresController'
})
.state('diaposter', {
	url:'/diaposter/:dia',
	templateUrl:'templates/diaposter.html',
	controller:'diaPosterController'
});

});