'use strict';

tamere.component('contact', {
    templateUrl: 'contact/contact.component.template.html',
    controller: ['$scope', 'TamereNavigationService', 'ContactService',
        function ContactController($scope, tamereNavigationService, contactService) {

            tamereNavigationService.setNavOption('Contact');

            $scope.user = {
                firstname: '',
                lastname: '',
                email: ''
            }

            $scope.email = {
                title: '',
                message: ''
            }

            $scope.error;

            $scope.formSubmitted = false;

            $scope.sendMail = function(user, email){
                console.log('send mail');

                if($scope.userForm.$valid) {
                    contactService.sendMail({user: user, email: email}).then(function(responseData){
                        $scope.formSubmitted = true;
                        // $scope.user = {};
                        // $scope.email = {};
                    }).catch(function(error){
                        $scope.formSubmitted = false;
                        $scope.error = error.message;
                    });
                }
            }

        }
    ]
});
