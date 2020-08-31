'use strict';

// Declare app level module which depends on views, and core components
var tamere =  angular.module('tamere', ['ui.router', 'pascalprecht.translate']);

tamere.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {

    $stateProvider
        .state( {
            name: 'home',
            url: "/home",
            component: 'home',
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
}]);
