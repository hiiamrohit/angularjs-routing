/*
* Author: Rohit Kumar
* Date: 26-06-2015
* Website: iamrohit.in
* App Name: angularjs routing
* Description: Routing example in angular.js
*/
var rohitApp = angular.module('rohitApp',['ngRoute'])
     .config(function($routeProvider){
     	$routeProvider
     	   // routing on home page
     	   .when('/', {
     	   	  templateUrl: 'templates/home.html',
     	   	  controller: 'homeController'
     	   })
     	    //routing on about page
     	  .when('/about', {
     	   	  templateUrl: 'templates/about.html',
     	   	  controller: 'aboutController'
     	   })
     	   //routing on contact page
     	   .when('/contactus', {
     	   	  templateUrl: 'templates/contactus.html',
     	   	  controller: 'contactusController'
     	   }) 
     });

     rohitApp    // where rohitApp is our ng-app module
     .controller('homeController', function($scope) {
          $scope.pageTitle = "Home Page";
          $scope.pageDescription = "I am Home Page."
     })
     // calling abou controller
     .controller('aboutController', function($scope){
          $scope.pageTitle = "About Page";
          $scope.pageDescription = "I am About Page."
     })
     // calling contact us controller
      .controller('contactusController', function($scope){
          $scope.pageTitle = "Contact Us";
          $scope.pageDescription = "I am Contact Us Page."
     })


