angular.module('starter.controllers').controller('SummaryCtrl', function($scope, $state, LoginService) {

    $scope.isNewUser = function(){
    	return LoginService.getNewUser();
    };
    
    $scope.loadiFrame = function() {
        $state.go('app.bankAccount');
    }
	
})
