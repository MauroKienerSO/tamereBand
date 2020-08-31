'use strict';

// Declare app level module which depends on views, and core components
var tamere =  angular.module('tamere', ['ui.router', 'pascalprecht.translate']);

tamere.config(['$stateProvider', '$translateProvider', function($stateProvider, $translateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: "<h3>{{'i18n_ta_mere' | translate}}</h3>"
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/tm.',
        suffix: '.json'
    })
    .preferredLanguage('de')
    .use('de')
    .fallbackLanguage('de')
    .useSanitizeValueStrategy('escaped'); // escaped stellt Sonderzeichen und Umlaute aus den Übersetzungen richtig dar. ('sanitize' putzt die &'s raus)
}]);
