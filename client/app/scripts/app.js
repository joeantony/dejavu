(function() {


  'use strict';

  /**
   * @ngdoc overview
   * @name Coupons
   * @description
   * # Coupons
   *
   * Main module of the application.
   */
  angular.module('dejavu', ['oc.lazyLoad', 'ngRoute', 'ui.router', 'angular-loading-bar']);


  angular.module('dejavu')
    .config(function($ocLazyLoadProvider, $urlRouterProvider, $stateProvider, $locationProvider) {

      $ocLazyLoadProvider.config({
        debug: true,
        events: true,
      });

      $urlRouterProvider.otherwise("/board/home");

      $stateProvider.state('board', {
          url: '/board',
          data: {title:'Coupons | Home'},
          controller: 'boardCtrl',
          templateUrl: 'views/board.html',
          resolve: {
            loadMyFiles: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'dejavu',
                files: ['scripts/controllers/board.js']
              })
              $ocLazyLoad.load({
                name: 'ngResource',
                files: ['/dejavu/client/bower_components/angular-resource/angular-resource.js']
              });
            }
          }
        })
        .state('board.home', {
          url: "/home",
          controller: 'homeCtrl',
          templateUrl: 'views/home.html',
          resolve: {
            loadMyFiles: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'dejavu',
                files: ['scripts/controllers/home.js',
                        'scripts/services/service.js' ]
              });
            }
          },
          data: {
            title: 'Coupons | Home'
          }
        })
        .state('board.login', {
          title: 'Login | Coupons',
          url: "/login",
          templateUrl: 'views/login.html',
          data: {
            title: 'Login | Coupons'
          }
        })
        .state('board.signup', {
          url: "/signup",
          templateUrl: 'views/signup.html',
          data: {
            title: 'Signup | Coupons'
          },
          controller: 'signUpCtrl',
          resolve: {
            loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
                  name: 'dejavu',
                  files: ['scripts/controllers/signup.js']
                }),
                $ocLazyLoad.load({
                  name: 'directive.g+signin',
                  files: ['scripts/directives/google-plus-signin.js']
                });
            }]
          }
        })
        .state('board.campaign', {
          url: "/campaign",
          templateUrl: 'views/campaign-create.html',
          controller: 'couponCtrl',
          resolve: {
            loadMyFile: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                  name: 'dejavu',
                  files: ['scripts/services/service.js',
                    'scripts/controllers/coupons.js'
                  ]
                })
                .then(function success(args) {
                  console.log('success');
                  return args;
                }, function error(err) {
                  console.log(err);
                  return err;
                });
            }
          },
          data: {
            title: 'Campaign | Coupons '
          }
        })
        .state('board.campaignUpdate', {
          url: "/campaign-update/:id",
          templateUrl: 'views/campaign-create.html',
          controller: 'campaignUpdateCtrl',
          resolve: {
            loadMyFile: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'dejavu',
                files: ['scripts/services/service.js',
                  'scripts/controllers/updateCoupons.js'
                ]
              });
            }
          },
          data: {
            title: 'Campaign Update | Coupons '
          }
        })
        .state('board.campaignList', {
          url: "/campaign-list",
          templateUrl: 'views/campaign-list.html',
          controller: 'campaignListCtrl',
          resolve: {
            loadMyFile: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'dejavu',
                files: ['scripts/services/service.js',
                        'scripts/controllers/list.js']
              });
            }]
          },
          data: {
            title: 'Campaign List | Coupons '
          }
        })
        .state('board.dashboard', {
          url: "/dashboard",
          templateUrl: 'views/dashboard.html',
          data: {
            title: 'Dashboard | Coupons '
          }
        });

    }); //end of config



  angular.module('dejavu')
    .run(function($rootScope, $state, $templateCache) {

      $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
        $rootScope.title = $state.current.data.title;
      });

      //getting rid of template caching
      /*$rootScope.$on('$routeChangeStart', function(event, next, current) {
          if (typeof(current) !== 'undefined'){
              console.log('view content loaded');
              $templateCache.remove(current.templateUrl);
          }
      });*/

      /*$rootScope.$on('$viewContentLoaded', function() {
          console.log('view content loaded');
          $templateCache.removeAll();
      });*/
    });



})();
