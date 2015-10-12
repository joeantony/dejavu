'use strict';

/**
 * @ngdoc function
 * @name dejavu.controller:campaignListCtrl
 * @description
 * # campaignListCtrl
 * Controller of the Dejavu:campaignListCtrl
 */

angular.module('dejavu')
    .controller('campaignListCtrl', function($scope, dataservice){
    
        $scope.couponList = {};
        $scope.products = {};
    
        //First get product & next get campaign data
        dataservice.getProduct()
                .then(function(data){
                        $scope.products = data;
                        
                   return dataservice.getCoupons();
            
                })
                .then(function(data){
                   $scope.couponList = data;                    
                  
                })
});