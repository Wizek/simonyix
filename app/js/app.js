'use strict'


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/_fooldal.html', controller: 'MainCtrl'})
    $routeProvider.when('/program', {templateUrl: 'partials/_program.html', controller: 'EventsCtrl'})
    $routeProvider.when('/helyszin', {templateUrl: 'partials/_helyszin.html', controller: 'PlaceCtrl'})
    $routeProvider.when('/kapcsolat', {templateUrl: 'partials/_kapcsolat.html', controller: 'ContactCtrl'})
    $routeProvider.otherwise({redirectTo: '/'})
  }])

  .controller('MainCtrl', function($scope, $http) {
    $http.get('/data/slides.json').then(function(res) {
      $scope.slides = res.data
    })

    $http.get('/data/pics.json').then(function(res) {
      $scope.pics = res.data
    })

    $scope.curr = {i: 0}

    $scope.$watch('curr.i', function(n, o) {
      var last = $scope.slides.length - 1
      // console.log(last, o, n)
      if (n > last) {
        return $scope.curr.i = 0
      }
      if (n < 0) {
        return $scope.curr.i = last
      }
    })
  })

  .controller('EventsCtrl', function($scope, $http) {
    $http.get('/data/events.json').then(function(res) {
      $scope.events = res.data
      $scope.selected = {name: Object.keys(res.data)[0]}
    })
  })

  .controller('PlaceCtrl', function($scope) {

  })

  .controller('ContactCtrl', function($scope) {

  })
