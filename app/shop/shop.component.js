'use strict';

tamere.component('shop', {
    templateUrl: 'shop/shop.component.template.html',
    controller: ['$scope', 'TamereNavigationService',
        function ShopController($scope, tamereNavigationService) {

            tamereNavigationService.setNavOption('Shop');

        }
    ]
});
