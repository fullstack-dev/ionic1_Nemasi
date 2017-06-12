angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider){

	$stateProvider
	
	.state('list', {
	    url: '/list',
	    templateUrl: 'templates/list.html',
	    controller: 'ListCtrl'
	})
	.state('loginwithsocial', {
	    url: '/loginwithsocial',
	    templateUrl: 'templates/loginwithsocial.html',
	    controller: 'LoginwithSocial'
	});    

	$urlRouterProvider.otherwise('/list');
});