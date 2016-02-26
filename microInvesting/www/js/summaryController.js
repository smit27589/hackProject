angular.module('starter.controllers').controller('SummaryCtrl', function($scope, $http, LoginService) {

	$scope.init = function () {
	    $http.get('http://localhost:8080/linkBankAccount')
	    	.success(function(data) {
	    	$scope.fastLinkURL = data;
	    	}
    	)};
	    
    $scope.isNewUser = function(){
    	return LoginService.getNewUser();
    };
    
    $scope.loadiFrame = function() {
    	document.getElementById('rsessionPost').submit();
    }
	
})
