angular.module('myApp')
       .controller('MembersCtrl', MembersCtrl);

function MembersCtrl($scope, $q, membersService) {
    membersService.getAllUsers()
    .then(function(users) {
        console.log(users.data.data);
        $scope.members = users.data.data;
    })
}

MembersCtrl.$inject = ['$scope', '$q', 'membersService'];