(function () {
    'use strict';

    angular.module('app').service('MoviesService', MoviesService);
	
    /* @ngInject */
    function MoviesService($http, $q) {
        const vm = this,
            url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144',
            moviesPromise = $http.get(url).then(response => response.data.results);

        vm.getMovies = () => moviesPromise;

        vm.getMovie = id => moviesPromise.then(movies => movies.find(movie => movie.id === +id));
    }
})();