'use strict';
/**
 * @ngdoc function
 * @name dejavu.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the Dejavu
 */
angular.module('dejavu')
  .controller('homeCtrl', function($rootScope, $scope) {
        
        //login & signout Link Show
        $scope.signOut = function(){
            console.log('signout inside');    
        };
    
  });
