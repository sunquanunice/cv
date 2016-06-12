'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('BaseCtrl', ['$scope', '$rootScope', '$translate', function ($scope, $rootScope, $translate) {
        $scope.init = function() {
            $rootScope.lang = $translate.preferredLanguage();
        }
    }]);
