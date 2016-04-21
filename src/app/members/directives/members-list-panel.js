angular.module('myApp')
       .directive('memberListPanel', function() {
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    members: "="
                },
                templateUrl: 'app/members/directives/members-list-panel.html'

            }
        })
