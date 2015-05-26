'use strict';

task.controller('taskcontroller', function($scope, FirebaseURL, $firebase, $routeParams, $firebaseArray, $location, toaster){

	var ref = new Firebase(FirebaseURL);
	var listadoTareas = $firebaseArray(ref.child('tareas'));
	var tareaId = $routeParams.idtarea;

	if (tareaId) {
		$scope.tareaSeleccionada = $scope.obtenerTarea(tareaId);
	};


	$scope.obtenerTarea = function(idtarea){
		return $firebaseArray(ref.child('tareas').child(idtarea))
	}

	$scope.actualizarTarea = function(tarea){
		$scope.tareaSeleccionada.$save(tarea);
		$location.path('/list')
	}

	$scope.tareas = listadoTareas;

	$scope.crearTarea = function(tarea){
		listadoTareas.$add(tarea);
		toaster.pop('success', "La tarea se creó correctamente!!");
		$location.path('/list')
	}

	$scope.cambiarPagina = function(ruta){
		$location.path('/'+ruta)		
	}

})