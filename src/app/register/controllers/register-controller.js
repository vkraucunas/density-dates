angular.module('myApp')
       .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject('$scope', 'registerService');

function RegisterCtrl($scope, registerService) {
    $scope.members = registerService.getAllUsers();
}

