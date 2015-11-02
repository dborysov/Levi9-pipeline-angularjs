(function () {
    'use strict';

    angular.module('app').controller('MovieDetails', MovieDetails);
	
    /* @ngInject */
    function MovieDetails($stateParams, MoviesService) {
        const vm = this;

        MoviesService.getMovie($stateParams.id)
                     .then(m => vm.movie = m);
    }
})();