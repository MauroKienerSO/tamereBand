'use strict';

tamere.component('shows', {
    templateUrl: 'shows/shows.component.template.html',
    controller: ['$scope', 'TamereNavigationService', 'ShowsService',
        function ShowsController($scope, tamereNavigationService, showsService) {

            $scope.message;
            $scope.error;

            tamereNavigationService.setNavOption('Shows');

            showsService.getShows().then(function(shows){
                $scope.shows = shows;
            });

            $scope.saveShow = function(){
                var show = {
                    id: 3,
                    date: "20-01-2021",
                    place: "Bierhübeli"
                }

                showsService.saveShow(show).then(function(message){
                    $scope.message = message;
                    $scope.shows.push(show);
                }).catch(function(error){
                    $scope.error = error;
                });
            }
        }
    ]
});
