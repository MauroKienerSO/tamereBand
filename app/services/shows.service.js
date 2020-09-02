'use strict';

tamere.factory('ShowsService', ['$http', '$q', 'TamereConfigService', function($http, $q, tamereConfigService){

    function ShowsService(){

        var self = this;

        self.shows;

        self.getShows = function(){
            var defer = $q.defer();

            if(self.shows){
                defer.resolve(self.shows);
            } else {
                $http.get(
                    tamereConfigService.defaultApiPath + '/api/shows'
                ).then(function (response) {
                    self.shows = response.data.shows;
                    defer.resolve(response.data.shows);
                }).catch(function (error) {
                    defer.reject(error)
                });
            }

            return defer.promise;
        };

        self.saveShow = function(show){
            var defer = $q.defer();

            $http.post(
                tamereConfigService.defaultApiPath + '/api/shows',
                show
            ).then(function (response) {
                defer.resolve(response.data.message);
            }).catch(function (error) {
                console.log(error);
                defer.reject(error)
            });

            return defer.promise;
        };




    };

    return new ShowsService();
}]);