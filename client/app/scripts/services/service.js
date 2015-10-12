(function(){
    
'use strict';

/**
 * @ngdoc function
 * @name dejavu.services:dataservice
 * @description
 * # services
 * services of the Dejavu
 */

    
angular.module('dejavu')
    .factory('dataservice', function($q, $http){
    
        //http://www.dwmkerr.com/promises-in-angularjs-the-definitive-guide/
        //$q promises
        //$resource - 
        //url = '/api/coupons'
        //http://beta.json-generator.com/
        var productUrl = 'data/products.json';
        var campaignUrl = 'data/campaigns.json'
        
        var dataservice = {};
         
    
        dataservice.getCoupons = function(){
            //  Create a deferred operation.
            var deferred = $q.defer(); 
            
                $http.get(campaignUrl)
                    .then(function(response){
                        //console.log('Success'+JSON.stringify(response));
                        deferred.resolve(response.data);
                    },
                    function(response, status){
                        //console.log('Error'+ JSON.stringify(response))
                        deferred.reject(response);
                    });
            
            return deferred.promise;
        };
        
        dataservice.postCoupons = function(){
            var deferred = $q.defer(); 
            
               /* $http.post(campaignUrl, data)
                    .then(function(response){
                        deferred.resolve(response);
                    },
                    function(response, status){
                        deferred.reject(response);
                    });*/
            
            return deferred.promise;
        }
        
        
        dataservice.deleteCoupons = function(){  }
        
        
        //PRODUCT DATA  
        dataservice.getProduct = function(){
                var deferred = $q.defer(); 
        
                $http.get(productUrl)
                    .then(function(response){
                        deferred.resolve(response.data);
                    },
                    function(response, status){
                        deferred.reject(response);
                    });
            
            return deferred.promise;
        }
        
        return dataservice;
    
    }); 
    
})();