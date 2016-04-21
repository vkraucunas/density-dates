angular.module('myApp')
       .service('registerService', [ '$http'
            function($http) {
                return {
                    getAllUsers: function() {
                        return $http('https://galvanize-student-apis.herokuapp.com/gdating/members')
                            .then(function(users) {
                                console.log(users.data[0]);
                            })
                            .catch(function(err) {
                                console.log(err);
                            })
                    }
            }
        }]);