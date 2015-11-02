(function () {
    'use strict';

    angular.module('app').controller('MovieDetailsCtrl', MovieDetailsCtrl);
	
    /* @ngInject */
    function MovieDetailsCtrl($stateParams, MoviesService) {
        var vm = this;

        MoviesService.getMovie($stateParams.id)
                     .then(m => vm.movie = m);
    }
})();