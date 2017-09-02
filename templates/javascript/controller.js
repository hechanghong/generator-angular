'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
 * @description
 * # <%= classedName %>Ctrl
 * Controller of the <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl',
        function($scope, $state, $stateParams) {

            $scope.data = '<%= classedName %> page.';

            $scope.goto = function() {
                //TODO

            };

            $scope.goto = function() {
                //TODO
                $state.go('about', {
                    param: 'policyNo'
                });
            };

        });