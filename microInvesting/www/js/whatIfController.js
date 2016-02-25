angular.module('starter.controllers').controller('WhatIfCtrl', function($scope, $stateParams,$state) {

	$scope.conservative = 8.27;
	$scope.moderate = 10.53;
	$scope.growth = 12.83;
	$scope.aggresive = 15.28;
	$scope.data={age:26,monthly:30,conservative:40,moderate:20,growth:10,aggresive:30};
	
	var calculateAmount = function(totalAmount){
		var expectedValue = (((totalAmount + ((totalAmount*$scope.conservative)/100)))*($scope.data.conservative/100)) +
		(((totalAmount + ((totalAmount*$scope.moderate)/100))) * ($scope.data.moderate/100)) +
		(((totalAmount + ((totalAmount*$scope.growth)/100))) * ($scope.data.growth/100)) +
		(((totalAmount + ((totalAmount*$scope.aggresive)/100))) * ($scope.data.aggresive/100));
		return expectedValue;
	};
	
	$scope.go = function(){
		var threeYearAmount = $scope.data.monthly* 36;
		var dataMap = {};
		dataMap[$scope.data.age] = 0;
		var initAmount = 0;
		for(var i = $scope.data.age + 3; i < 67; i+=3){
			var initAmount = calculateAmount(initAmount + threeYearAmount);
			dataMap[i] = initAmount;
			
		}
		console.log(dataMap);
	};

});