(function(pipeline){
	"use strict";

	pipeline.service('MoviesService', ['$http', '$q', function($http, $q){
		var movies = $q.defer(),
			url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

		$http.get(url).then(response => {
					    					movies.resolve(response.data.results); 
					    					return movies.promise
					    				});

		this.getMovie = id => movies.promise.then(mv => mv.find(m => m.id === +id)); 
		this.getMovies = () => movies.promise;
	}]);

})(window.pipeline);