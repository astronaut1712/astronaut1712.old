var app = angular.module('StarterApp', ['ngMaterial']);

app.filter("nospace", function() {
    return function(e) {
        return e ? e.replace(/ /g, "") : ""
    }
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.sections = [];
  for (var i = 0; i < 10; i++) {
    $scope.sections.push({
      name: 'Test ' + i,
      type: 'toggle',
      pages: [{
        name: 'link1',
        url: '/link1'
      }, {
        name: 'link2',
        url: '/link2'
      }]
    });
  };

  $scope.isSectionSelected = function(item) {
    return true;
  };

}]);

app.directive('menuToggle', [function() {
  return {
    scope: {
      section: "="
    },
    templateUrl: "layout/menu-toggle.tmpl.html",
    link: function(e, t) {
      console.log(t);
      console.log(typeof t.parent());
      var n = t.parent().controller();
      console.log(n);
      e.isOpen = function() {
        return false;
        //return n.isOpen(e.section)
      }, e.toggle = function() {
        n.toggleOpen(e.section)
      };
      var a = t[0].parentNode.parentNode.parentNode;
      if (a.classList.contains("parent-list-item")) {
        var o = a.querySelector("h2");
        t[0].firstChild.setAttribute("aria-describedby", o.id)
      }
    }
  };
}]);
