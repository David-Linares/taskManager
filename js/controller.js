'use strict';

task.controller('taskcontroller', function($scope, FirebaseURL, $firebase, $firebaseArray, $location){

	var ref = new Firebase(FirebaseURL);
	var listadoTareas = $firebaseArray(ref.child('tareas'));

	$scope.tareas = listadoTareas;

	$scope.crearTarea = function(tarea){
		listadoTareas.$add(tarea);
		$location.path('/list')
	}

})