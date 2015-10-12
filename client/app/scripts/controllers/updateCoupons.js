
'use strict';

/**
 * @ngdoc function
 * @name dejavu.controller:campaignUpdateCtrl
 * @description
 * # campaignUpdateCtrl
 * Controller of the Dejavu:coupon
 */

angular.module('dejavu')
    .controller('campaignUpdateCtrl', function($scope, $stateParams, dataservice){
    
            // get the id
            $scope.id = $stateParams.id;
            console.log($scope.id);
    
});
