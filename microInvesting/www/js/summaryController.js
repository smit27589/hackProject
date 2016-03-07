angular.module('starter.controllers').controller('SummaryCtrl', function($scope, LoginService, $state) {

    $scope.isNewUser = function(){
    	return LoginService.getNewUser();
    };
    
    $scope.loadBankAccount = function() {
	  $state.go('app.bankAccount');
    };
	
})
