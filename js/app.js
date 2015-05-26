'use strict';

var task = angular
	.module('taskmanager', ['ngRoute', 
		'ngResource', 
		'ngAnimate', 
		'firebase',
		'ui.bootstrap',
		'toaster'
	])
	.constant('FirebaseURL', 'https://task-asigner.firebaseio.com/')
	.config(function($routeProvider){
		$routeProvider
		.when('/login', {templateUrl: 'templates/login.html', controller: 'authController'})
		.when('/registro', {templateUrl: 'templates/registro.html', controller: 'authController'})
		.when('/edit/:idtarea', {templateUrl: 'templates/edit.html'})
		.when('/list', {templateUrl: 'templates/list.html', controller: 'taskcontroller'})
		.otherwise({redirectTo:'/login'})
	})