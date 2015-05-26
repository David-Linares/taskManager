'use strict';

task.factory('Auth', function(FirebaseURL, $firebaseAuth, $firebase){
	var ref = new Firebase(FirebaseURL);
	var auth = $firebaseAuth(ref);

	var Auth = {

		user: {},

		login: function(user){
			return auth.$authWithPassword(
				{email: user.email, password: user.password}
			);
		},
		registro: function(user){
			return auth.$createUser(
				{email: user.email, password: user.password}
			).then(function(){
				return Auth.login(user)
			});
		},
		cerrarSesion: function(){
			auth.$unauth();
		},
		cambiarPass: function(user){
			return auth.$changePassword(
				{email: user.email, oldPassword: user.oldpass, newPassword: user.newpass}
			);
		},
		logueado: function(){
			return !!Auth.user.provider;
		}
	}

	auth.$onAuth(function(authData){
		if (authData) {
			angular.copy(authData, Auth.user);
		}else{
			angular.copy({}, Auth.user);
		}
	})

	return Auth;
})