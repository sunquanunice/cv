'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('FlexsliderCtrl', ['$scope', function ($scope) {
        $scope.init = function() {
            $scope.slides = [1];
            /*
            *                 {"image" : "/assets/images/flexslider1.jpg"},
             {"image" : "/assets/images/flexslider2.jpg"},
             {"image" : "/assets/images/flexslider3.gif"}
             */
             var size = {
                width: window.innerWidth || document.body.clientWidth,
                height: window.innerHeight || document.body.clientHeight
            }
            $("#flexslider-carsousel").css({

            });
        }
    }]);
