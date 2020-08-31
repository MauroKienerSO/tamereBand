'use strict';

tamere.component('videos', {
    templateUrl: 'videos/videos.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function VideosController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Videos');

        }
    ]
});
