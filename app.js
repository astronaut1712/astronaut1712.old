var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title;
        }
    }

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Hello World');
    });
}]);
