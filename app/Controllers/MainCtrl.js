(function(){
	'use strict';
	
	angular.module('app').controller('MainCtrl', MainCtrl);
	
	MainCtrl.$inject = ['MoviesService'];
	function MainCtrl(moviesService){
		var vm = this;
		
		moviesService.getMovies()
					 .then(results => { vm.results = results;	});
	}
})();