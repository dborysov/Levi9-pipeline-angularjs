(function(){
	'use strict';

	angular.module('app', ['ui.router']).config(/* @ngInject */function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/movies");

		$stateProvider
				.state('index', {
					url: '',
					abstract: true,
					controller: 'MainCtrl as vm',
					template: '<ui-view/>'
				})
				.state('index.movies', {
					url: '/movies',
					templateUrl: 'partials/movies-list.html'
				})
				.state('index.details', {
					url: '/movies/:id',
					templateUrl: 'partials/movies-details.html',
					controller: 'MovieDetailsCtrl as vm'
				})
	});
})();