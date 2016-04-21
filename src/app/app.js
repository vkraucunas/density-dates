angular.module('myApp', [ 'ui.router'])
       .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
          $urlRouterProvider.otherwise("/");
          $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                // restricted: false,
                // preventLoggedIn: false
            })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html'
                // controller: "registerController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
                // controller: "loginController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .state('members', {
                url: '/members',
                templateUrl: 'templates/members.html',
                controller: MembersCtrl
                // controller: "loginController",
                // restricted: false,
                // preventLoggedIn: true
            })
            .state('members.single', {
                url: '/members/:slug',
                templateUrl: 'templates/single.html',
                controller: SingleCtrl,
                // scope: {slug: req.params.slug}
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
        })

