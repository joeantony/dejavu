
'use strict';

/**
 * @ngdoc function
 * @name dejavu.controller:couponCtrl
 * @description
 * # couponCtrl
 * Controller of the Dejavu:coupon
 */

angular.module('dejavu')
    .controller('couponCtrl', function($scope, dataservice){
    
        console.log('coupon controll')
        var self = this;

        $scope.masterCampaign = [];
        $scope.entryCampaign = {};
    
        $scope.configCoupons = [];
        $scope.coupon = {};

    
        //DATA SERVICE FOR GET DATA
        dataservice.getCoupons()
                    .then(
                        /* Success */
                        function(data){
                            //console.log(data)
                            $scope.masterCampaign = data;
                        },
                        /* Error */
                         function(error){
                             console.log(JSON.stringify(error));
                         }
                    );
    
    
        $scope.createCampaign = function(){
                        
            var campaignList = {
                      _id: $scope.masterCampaign.length + 1,
                      name: $scope.entryCampaign.name,
                      userId: 1,
                      productId: 1,
                      totalBudget: $scope.entryCampaign.totalBudget,
                      coupons: $scope.configCoupons,
                      startDate: $scope.entryCampaign.startDate,
                      endDate: $scope.entryCampaign.endDate
                };
            
            $scope.masterCampaign.push(campaignList);
            
            $scope.entryCampaign = {};
            
            
            console.log($scope.masterCampaign);
            
            //POST CAMPAIGN DATA
            dataservice.postCoupons($scope.masterCampaign);
            
            //SUCCESS MESSAGE
            
        }

        $scope.couponAdd = function(){

            $scope.configCoupons.push({
                    code: $scope.coupon.code,
                    value: $scope.coupon.value,
                    count: $scope.coupon.count,
                    redeemedCount: 0
                  });
            $scope.coupon = {}
        }
    
});



