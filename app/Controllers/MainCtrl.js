(function(pipeline){
	"use strict";

	pipeline.controller('MainCtrl', ['MoviesService', function(moviesService){

		moviesService.getMovies()
					 .then(results => { this.results = results;	});

	}]);
})(window.pipeline);