'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('InfosCtrl', ['$scope', '$filter', function ($scope, $filter) {
        $scope.init = function() {
            $scope.age = new Date().getFullYear() -1991;
            var appartement = $filter('translate')('appartement').replace(/, /g, "+").replace(/ /g, "+");
            var zip = $filter('translate')('zip-city').split(" ")[0];
            $scope.address = "https://www.google.com/maps/place/" + appartement + ",+" + zip;

        }
    }]);
