'use strict';

tamere.factory('TamereNavigationService', [function(){

    function TamereNavigationService(){
        var self = this;

        self.navOptions = {
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

        self.getNavOptions = function(){
            return self.navOptions;
        }

        self.setNavOption = function(title){
            angular.forEach(self.navOptions, function(option){
                if(title === option.title){
                    option.active = true;
                } else {
                    option.active = false;
                }
            });
        }

        self.switchNavigation = function(selectedOption){
            angular.forEach(self.navOptions, function(option){
                if(selectedOption.title === option.title){
                    option.active = true;
                } else {
                    option.active = false;
                }
            });

            return self.navOptions;
        };


    };

    return new TamereNavigationService();
}]);