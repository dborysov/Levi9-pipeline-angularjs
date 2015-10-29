(function(){
	'use strict';

	angular.module('app').controller('MovieDetailsCtrl', MovieDetailsCtrl);
	
	MovieDetailsCtrl.$inject = ['$stateParams', 'MoviesService'];
	function MovieDetailsCtrl($stateParams, moviesService){
		var vm = this;
		
		moviesService.getMovie($stateParams.id)
					 .then(m => vm.movie = m);
	}
})();