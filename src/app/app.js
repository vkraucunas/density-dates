angular.module('myApp', ['ngRoute'])
       .config(function($routeProvider, $locationProvider, $httpProvider) {
          $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                // restricted: false,
                // preventLoggedIn: false
            })
            .when('/register', {
                templateUrl: 'app/register/directives/register.html',
                // controller: "registerController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .when('/login', {
                templateUrl: 'app/login/directives/login.html',
                // controller: "loginController",
                // restricted: false,
                // preventLoggedIn: true
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
        });