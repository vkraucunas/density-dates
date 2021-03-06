angular.module('myApp')
       .service('membersService', ['$http', '$q', function($http, $q) {
            return {
                getAllUsers: function() {
                    return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members/?limit=15')
                },
                getUserBySlug: function(id) {
                    return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members/search/'+id)
                }
            }
        }])