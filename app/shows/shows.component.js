'use strict';

tamere.component('shows', {
    templateUrl: 'shows/shows.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function ShowsController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Shows');

        }
    ]
});
