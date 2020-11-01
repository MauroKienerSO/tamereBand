'use strict';

tamere.factory('ContactService', ['$http', '$q', 'TamereConfigService', function($http, $q, tamereConfigService){

    function ContactService(){

        var self = this;

        self.sendMail = function(mailContent){
            var defer = $q.defer();

            $http.post(
                tamereConfigService.defaultApiPath + '/api/contact',
                mailContent
            ).then(function (response) {
                console.log('everything went fine');
                defer.resolve(response.data);
            }).catch(function (error) {
                console.log('something went wrong');
                defer.reject(error.data)
            });

            return defer.promise;
        };

    };

    return new ContactService();
}]);