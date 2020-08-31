'use strict';

tamere.component('home', {
    templateUrl: 'home/home.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function HomeController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Home');
        }
    ]
});
