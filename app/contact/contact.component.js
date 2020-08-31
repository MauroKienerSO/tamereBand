'use strict';

tamere.component('contact', {
    templateUrl: 'contact/contact.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function ContactController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Contact');

        }
    ]
});
