angular.module('myApp')
       .controller('SingleCtrl', SingleCtrl)


function SingleCtrl($scope, $stateParams, membersService) {
    membersService.getUserBySlug($stateParams.slug)
    .then(function(user) {
        $scope.oneUser = user.data.data;
    })
}

SingleCtrl.$inject = ['$scope', '$stateParams', 'membersService'];