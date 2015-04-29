var app = angular.module('Gallery', ['ngRoute', 'ui.bootstrap']);


app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      //controller: 'HomeController', 
      templateUrl: '/views/home.html' 
    })
    .when('/theArtist', {
      templateUrl: '/views/theArtist.html' 
    })
    .when('/concept', {
      templateUrl: '/views/concept.html' 
    })
    .when('/gemsAndWood', {
      controller: 'GemWoodController',
      templateUrl: '/views/gemWood.html' 
    })
  
    .when('/contact', {
      templateUrl: '/views/contact.html' 
    })
  
    .otherwise({ 
      redirectTo: '/' 
    });
    
});