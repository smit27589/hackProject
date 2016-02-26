angular.module('starter.controllers').controller('SummaryCtrl', function($scope, $http, LoginService) {

	$scope.init = function () {
	    $http.get('http://localhost:8080/linkBankAccount')
	    	.success(function(data) {
	    	$scope.fastLinkURL = data;
	    	}
    	)};
	
	$scope.investmentStartegyDollarData = [
		{categoryName:'Conservative',value:'40.25'},
	{categoryName:'Moderate',value:'130.25'},
	{categoryName:'Growth',value:'139.50'},
	{categoryName:'Aggresive',value:'80'}		
	];
	
	$scope.investmentStartegyPercentageData = [
	                               		{categoryName:'Conservative',value:'10'},
	                               	{categoryName:'Moderate',value:'35'},
	                               	{categoryName:'Growth',value:'35.7'},
	                               	{categoryName:'Aggresive',value:'20'}		
	                               	];
	
	$scope.selected = "dollar";
	$scope.setSelected = function(type) {
        $scope.selected = type;
    };
    $scope.isSelected = function(type) {
        return type === $scope.selected;
    };
    
    $scope.isNewUser = function(){
    	return LoginService.getNewUser();
    };
    
    $scope.loadiFrame = function() {
    	document.getElementById('rsessionPost').submit();
    }

    
	
})
