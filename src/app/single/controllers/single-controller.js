angular.module('myApp')
       .controller('SingleCtrl', SingleCtrl)


function SingleCtrl($scope, membersService) {
    membersService.getAllUsers()
    .then(function(users) {
        console.log(users.data.data);
        $scope.members = users.data.data;
    })
    $scope.person = getPersonBySlug($scope.slug);
}

SingleCtrl.$inject = ['$scope', 'membersService'];