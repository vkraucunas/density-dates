angular.module('myApp', [ 'ui.router'])
       .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
          $urlRouterProvider.otherwise("/");
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                restricted: false,
                preventLoggedIn: false
            })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: "AuthCtrl",
                restricted: false,
                preventLoggedIn: true
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: "AuthCtrl",
                restricted: false,
                preventLoggedIn: true
            })
            .state('members', {
                url: '/members',
                templateUrl: 'templates/members.html',
                controller: 'MembersCtrl',
                // controller: "loginController",
                restricted: true,
                preventLoggedIn: true
            })
            .state('members.single', {
                url: '/{slug}',
                templateUrl: 'templates/single.html',
                controller: 'SingleCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html',
                // controller: SingleCtrl
            })
            // .state('members.search', {
            //     url: '/search',
            //     templateUrl: 'templates/search.html',
            //     controller: SearchCtrl
            // })
            // .when('/logout', {
            //     restricted: false,
            //     preventLoggedIn: false,
            //     resolve: function(authService, $location) {
            //         test: {
            //             authService.logout();
            //             $location.path('/login');
            //         }
            //     }
            // })
            $httpProvider.interceptors.push('authInterceptor');
        })
        .run(routeChange);

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$stateChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/');
      }
    });
  }
