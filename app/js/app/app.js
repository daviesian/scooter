'use strict';

define(["foundation", "angular", "angular-route", "app/controllers", "app/directives", "app/services", "app/filters"], function() {

	// Declare app level module which depends on filters, and services
	angular.module('scooter', [
		'ngRoute',
		'scooter.filters',
		'scooter.services',
		'scooter.directives',
		'scooter.controllers'
	])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
		$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
		$routeProvider.otherwise({redirectTo: '/view1'});
	}])

	.run([function() {
		
		$(document).foundation();

	}]);


	/////////////////////////////////////
	// Bootstrap AngularJS
	/////////////////////////////////////

	var root = $("html");
	angular.bootstrap(root, ['scooter']);

});