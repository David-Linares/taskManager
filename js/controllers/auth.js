'use strict';

task.controller('authController', function($scope, $location, Auth, toaster){

	if (Auth.logueado()) {
		$location.path("/list")
	};

	$scope.registrar = function(user){
		console.log(user)
		Auth.registro(user).then(function(){
			toaster.pop("success", "Se registró correctamente!!");
			$location.path("/list");
		}, function(err){
			console.log(err)
		})
	}

	$scope.ingresar = function(user){
		Auth.login(user).then(function(){
			console.log("Logueado ok!");
			$location.path("/list");
		}, function(err){
			console.log(err)
		})
	}

	$scope.cambiarPass = function(user){
		Auth.cambiarPass(user).then(function(){
			$scope.user = {};
			console.log("Contraseña cambiada ok!");
		}, function(err){
			console.log(err)
		})
	}
})