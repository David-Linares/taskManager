'use strict';

var task = angular
	.module('taskmanager', ['ngRoute', 
		'ngResource', 
		'ngAnimate', 
		'firebase',
		'ui.bootstrap'
	])
	.constant('FirebaseURL', 'https://task-asigner.firebaseio.com/')
	.config(function($routeProvider){
		$routeProvider
		.when('/', {templateUrl: 'templates/index.html'})
		.when('/post', {templateUrl: 'templates/post.html', controller: 'taskcontroller'})
		.when('/edit', {templateUrl: 'templates/edit.html'})
		.when('/list', {templateUrl: 'templates/list.html', controller: 'taskcontroller'})
		.otherwise({redirectTo:'/'})
	})