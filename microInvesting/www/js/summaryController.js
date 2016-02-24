angular.module('starter.controllers').controller('SummaryCtrl', function($scope, $stateParams,$state) {

	$scope.investmentStartegyDollarData = [
		{categoryName:'Conservative',value:'$40.25'},
	{categoryName:'Moderately Conservative',value:'$130.25'},
	{categoryName:'Moderate',value:'$19'},
	{categoryName:'Moderately Aggresive',value:'$120'},
	{categoryName:'Aggresive',value:'$80'}		
	];
	
	$scope.investmentStartegyPercentageData = [
	                               		{categoryName:'Conservative',value:'10%'},
	                               	{categoryName:'Moderately Conservative',value:'35%'},
	                               	{categoryName:'Moderate',value:'5%'},
	                               	{categoryName:'Moderately Aggresive',value:'30%'},
	                               	{categoryName:'Aggresive',value:'20%'}		
	                               	];
	
//	$scope.investmentStartegyUnitsData = [
//	                               		{categoryName:'Conservative',value:'5'},
//	                               	{categoryName:'Moderately Conservative',value:'25'},
//	                               	{categoryName:'Moderate',value:''},
//	                               	{categoryName:'Moderately Aggresive',value:''},
//	                               	{categoryName:'Aggresive',value:''}		
//	                               	];
	
})
