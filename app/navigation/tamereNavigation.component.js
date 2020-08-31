'use strict';

tamere.component('tamereNavigation', {
    templateUrl: 'navigation/tamereNavigation.template.html' ,
    controller: ['$scope', 'TamereNavigationService',
        function NavigationController($scope, tamereNavigationService) {
            $scope.navOptions = tamereNavigationService.navOptions;
        }
    ]
});
