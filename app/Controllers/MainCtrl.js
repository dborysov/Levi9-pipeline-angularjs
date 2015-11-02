(function () {
    'use strict';

    angular.module('app').controller('MainCtrl', MainCtrl);
	
    /* @ngInject */
    function MainCtrl(MoviesService) {
        var vm = this;

        MoviesService.getMovies()
                     .then(results => { vm.results = results; });
    }
})();