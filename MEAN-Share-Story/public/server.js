var myApp = angular.module('myApp',['ngRoute','ngCookies']);
myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/', {
		templateUrl:'client/comment.html',
		controller:'empController'
	})
		.when('/login', {
			templateUrl:'client/login.html',
			controller:'empController'
		})
		.when('/registration', {
			templateUrl:'client/registration.html',
			controller:'empController'
		})
		.otherwise({
			redirectTo:'/'
		});
		$locationProvider.html5Mode(true);
});

myApp.run(function($rootScope,$cookies){
	if($cookies.get('token') && $cookies.get('currentUser')){
		$rootScope.token=$cookies.get('token');
		$rootScope.currentUser=$cookies.get('currentUser');

	}
});
