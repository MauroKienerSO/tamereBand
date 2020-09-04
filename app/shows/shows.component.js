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
                $scope.error = '';
                $scope.message = '';

                showsService.saveShow(show).then(function(responseData){
                    $scope.message = responseData.message;
                    $scope.shows.push(responseData.show);
                    $scope.show = {};
                }).catch(function(error){
                    $scope.error = error.message;
                });
            }

            $scope.deleteShow = function(show){
                $scope.error = '';
                $scope.message = '';

                showsService.deleteShow(show).then(function(responseData){
                    $scope.message = responseData.message;
                    var index = $scope.shows.indexOf(show);
                    $scope.shows.splice(index, 1);
                }).catch(function(error){
                    $scope.error = error.message;
                });
            }
        }
    ]
});
