'use strict';

// Declare app level module which depends on views, and core components
var tamere =  angular.module('tamere', ['ui.router', 'pascalprecht.translate', 'ngAnimate', 'ngMessages', 'ngMaterial']);

tamere.run(['$transitions', function($transitions) {

    // Hide Collapsible Navbar element on state change
    $transitions.onSuccess({}, function(transition) {
        $('#tamereNavbar').collapse('hide');

        // Disable the focus on the nav-links
        $('#tamereNavbar a.nav-link').blur();
    });

}]);

tamere.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $translateProvider, $mdThemingProvider) {

    $stateProvider
        .state( {
            name: 'home',
            url: "/home",
            component: 'home'
        })
        .state( {
            name: 'shows',
            url: "/shows",
            component: 'shows'
        })
        .state( {
            name: 'music',
            url: "/music",
            component: 'music'
        })
        .state( {
            name: 'videos',
            url: "/videos",
            component: 'videos'
        })
        .state( {
            name: 'shop',
            url: "/shop",
            component: 'shop'
        })
        .state( {
            name: 'contact',
            url: "/contact",
            component: 'contact'
        })

    $urlRouterProvider.otherwise('/home');

    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/tm.',
        suffix: '.json'
    })
    .preferredLanguage('de')
    .use('de')
    .fallbackLanguage('de')
    .useSanitizeValueStrategy('escaped'); // escaped stellt Sonderzeichen und Umlaute aus den Übersetzungen richtig dar. ('sanitize' putzt die &'s raus)

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange');
}]);
