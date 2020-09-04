'use strict';

tamere.component('shows', {
    templateUrl: 'shows/shows.component.template.html',
    controller: ['$scope', 'TamereNavigationService', 'ShowsService',
        function ShowsController($scope, tamereNavigationService, showsService) {

            $scope.show = {};
            $scope.message;
            $scope.error;

            tamereNavigationService.setNavOption('Shows');

            showsService.getShows().then(function(shows){
                $scope.shows = shows;
            });

            $scope.saveShow = function(show){
                showsService.saveShow(show).then(function(message){
                    $scope.message = message;
                    $scope.shows.push(show);
                    $scope.show = {};
                }).catch(function(error){
                    $scope.error = error;
                });
            }
        }
    ]
});
