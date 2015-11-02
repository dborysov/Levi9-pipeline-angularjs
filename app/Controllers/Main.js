(function () {
    'use strict';

    angular.module('app').controller('Main', Main);
	
    /* @ngInject */
    function Main(MoviesService) {
        const vm = this;

        MoviesService.getMovies()
                     .then(results => { vm.results = results; });
    }
})();