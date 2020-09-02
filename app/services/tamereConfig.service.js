'use strict';

tamere.factory('TamereConfigService', [function(){

    function TamereConfigService(){

        var self = this;

        self.defaultApiPath = 'http://localhost:3000';

    };

    return new TamereConfigService();
}]);