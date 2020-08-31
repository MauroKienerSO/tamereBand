'use strict';

tamere.component('music', {
    templateUrl: 'music/music.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function MusicController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Music');

        }
    ]
});
