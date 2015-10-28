(function(pipeline){
	"use strict";

	pipeline.controller('MovieDetailsCtrl', ['$stateParams', 'MoviesService', function($stateParams, moviesService){

		moviesService.getMovie($stateParams.id)
					 .then(m => this.movie = m);

	}]);
})(window.pipeline);