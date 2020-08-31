'use strict';

tamere.component('tamereNavigation', {
    templateUrl: 'navigation/tamereNavigation.template.html',
    controller: ['$scope',
        function NavigationController($scope) {

            $scope.navOptions = {
                Home: {
                    title: 'Home',
                    active: true,
                    link: 'home'
                },
                Shows: {
                    title: 'Shows',
                    active: false,
                    link: 'shows'
                },
                Music: {
                    title: 'Music',
                    active: false,
                    link: 'music'
                },
                Videos: {
                    title: 'Videos',
                    active: false,
                    link: 'videos'
                },
                Shop: {
                    title: 'Shop',
                    active: false,
                    link: 'shop'
                },
                Contact: {
                    title: 'Contact',
                    active: false,
                    link: 'contact'
                }
            };

        }
    ]
});
