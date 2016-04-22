(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('myApp')
    .service('authService', authService)
    .service('geoService', geoService);

  authService.$inject = ['$http', '$window'];
  geoService.$inject = ['$window', '$q'];

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        return $http.post('/auth/login', user);
      },
      logout: function(user) {
        user = null;
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      },

    };
  }

    function geoService($window, $q) {
        function getCurrentPosition() {
            var deferred = $q.defer();

            if (!$window.navigator.geolocation) {
                deferred.reject('Geolocation not supported.');
            } else {
                $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
            }
            return deferred.promise;
        }

        return {
            getCurrentPosition: getCurrentPosition
        };
    }

})();
