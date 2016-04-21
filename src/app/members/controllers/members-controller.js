angular.module('myApp')
       .controller('MembersCtrl', MembersCtrl)


function MembersCtrl($scope, membersService) {
    membersService.getAllUsers()
    .then(function(users) {
        console.log(users.data.data);
        $scope.members = users.data.data;
    })

}

MembersCtrl.$inject = ['$scope', 'membersService'];