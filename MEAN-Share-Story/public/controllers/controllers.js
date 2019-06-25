myApp.controller('empController', function($scope,$http,$route,$location,$routeParams,$cookies,$rootScope){

	$scope.signUp = function(){
		$http.post('/api/users/register', $scope.user).then(function(response){
			window.location.href = '/';
		});
	};

  $scope.signIn=function(){
  $http.post('/api/users/login',{username: $scope.username,password:$scope.password}).then(function(response){
    console.log(response);
		$cookies.put('token',response.data.token);
		$cookies.put('currentUser', $scope.username);
		$rootScope.token=response.data.token;
		$rootScope.currentUser=$scope.username;
		alert('successfully sign in');
		$location.path('/');
  },function(err){
		alert('bad login credentials');
	});
};


$scope.logout=function(){
	$cookies.remove('token');
	$cookies.remove('currentUser');
	$rootScope.token=null;
	$rootScope.currentUser=null;
}


$scope.addcomment = function(){
	$http.post('/api/comments/comment', $scope.comment,{headers:{'authorization':$rootScope.token}}).then(function(response){
		window.location.href = '/';
	});
};

$http.get('/api/comments/').then(function(response){
		$scope.com=response.data;
	})


	$scope.removeComment = function(x){
			$http.put('/api/comments/remove',{x:x},{headers:{'authorization':$rootScope.token}}).then(function(response){
				$route.reload();
			});
		};
});
