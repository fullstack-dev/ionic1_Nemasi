angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider){

	$stateProvider
	
	.state('list', {
	    url: '/list',
	    templateUrl: 'templates/list.html',
	    controller: 'ListCtrl'
	})
	.state('list-detail', {
	    url: '/list-detail',
	    templateUrl: 'templates/list-detail.html',
	    controller: 'ListDetailCtrl'
	});    

	$urlRouterProvider.otherwise('/list');
});