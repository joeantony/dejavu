(function(){

'use strict';
    
    angular.module('dejavu',['oc.lazyLoad', 'ui.router','angular-loading-bar']);
    
    angular.module('dejavu')
        .config(function($ocLazyLoadProvider, $urlRouterProvider, $stateProvider, $locationProvider){
        
         $ocLazyLoadProvider.config({
            debug: true,
            events: true,
          });
        
        $urlRouterProvider.otherwise("/home");
        
        $stateProvider.state('home',{
                            url:"/home",
                            templateUrl: 'views/home.html'
                           /* resolve: {
                                loadMyFiles: function($ocLazyLoad) {
                                    return  $ocLazyLoad.load(
                                            {
                                              name:'ngAnimate',
                                              files:['lib/angular-animate/angular-animate.min.js']
                                            }),
                                            $ocLazyLoad.load(
                                            {
                                              name:'ngResource',
                                              files:['lib/angular-resource.js']
                                            });    
                                }   
                            }*/
                        })
                        .state('login',{
                            url: "/login",
                            templateUrl: 'views/login.html'
                        })
                        .state('signup',{
                            url: "/signup",
                            templateUrl: 'views/signup.html'
                        })
                        .state('campaign',{
                            url: "/campaign",
                            templateUrl: 'views/campaign-create.html'
                        })
                        .state('campaign-list',{
                            url: "/campaign-list",
                            templateUrl: 'views/campaign-list.html'
                        })
                        .state('dashboard',{
                            url: "/dashboard",
                            templateUrl: 'views/dashboard.html'
                        });
        
         $locationProvider.html5Mode(true);
      
        
    });
    
})();