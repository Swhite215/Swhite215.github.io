//create your portfolio page module
var app = angular.module("myModule", ['ngRoute', 'ngAnimate']);

//configure your routing
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      controller: 'myHome',
      templateUrl: 'views/welcome.html'
    })
    .when('/about', {
      controller: 'myAbout',
      templateUrl: 'views/about.html'
    })
    .when('/portfolio', {
      controller: 'myPortfolio',
      templateUrl: 'views/portfolio.html'
    })
    .when('/Tranquility', {
      controller: 'myProject',
      templateUrl: 'views/project.html'
    })
    .otherwise({ redirectTo: '/home'});

    $locationProvider.hashPrefix('');

});
