'use strict';

task.controller('sessionController', function($scope, $location, Auth){

	$scope.usuarioLogueado = Auth.user
	$scope.logueado = Auth.logueado;

	$scope.cerrarSesion = function(){
		Auth.cerrarSesion();
		console.log("Session cerrada correctamente!!")
		$location.path('/login');
	}

})