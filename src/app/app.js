angular.module('myApp', ['ngRoute'])
       .config(function($routeProvider, $locationProvider, $httpProvider) {
          $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                // restricted: false,
                // preventLoggedIn: false
            })
            .when('/register', {
                templateUrl: 'templates/register.html'
                // controller: "registerController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
                // controller: "loginController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .when('/members', {
                templateUrl: 'templates/members.html',
                controller: MembersCtrl
                // controller: "loginController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .when('/members/:slug', {
                // templateUrl: 'templates/single.html',
                // controller: SingleControl
            })
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
            .otherwise({redirectTo: '/'});
        })

