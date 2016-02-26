angular.module('starter.controllers').controller('WhatIfCtrl', function($scope, $stateParams,$state) {

	$scope.conservative = 8.27;
	$scope.chartReady = false;
	$scope.moderate = 10.53;
	$scope.growth = 12.83;
	$scope.aggresive = 15.28;
	$scope.data={age:26,monthly:30,conservative:40,moderate:20,growth:10,aggresive:30};
	$scope.amountData = [{key:'age',values:[]}];
//	$scope.amountData = [{x:0,y:100},{x:1,y:200}];
	var calculateAmount = function(totalAmount){
		var expectedValue = (((totalAmount + ((totalAmount*$scope.conservative)/100)))*($scope.data.conservative/100)) +
		(((totalAmount + ((totalAmount*$scope.moderate)/100))) * ($scope.data.moderate/100)) +
		(((totalAmount + ((totalAmount*$scope.growth)/100))) * ($scope.data.growth/100)) +
		(((totalAmount + ((totalAmount*$scope.aggresive)/100))) * ($scope.data.aggresive/100));
		return expectedValue;
	};
	
	$scope.go = function(){
		var threeYearAmount = $scope.data.monthly* 36;
		$scope.amountData[0].values.push({x:$scope.data.age,y:0});
		var initAmount = 0;
		for(var i = $scope.data.age + 3; i < 67; i+=3){
			var initAmount = calculateAmount(initAmount + threeYearAmount);
			$scope.amountData[0].values.push({x:i,y:initAmount});
			
		}
		$scope.chartReady = true;
		console.log($scope.amountData);
	};
	
	
	 $scope.options = {
			    chart: {
			      type: 'lineChart',
			      height: 350,
			      margin: {
			          top: 15,
			          right: 5,
			          bottom: 15,
			          left: 10
			        },
			      x: function(d){ return d.x; },
	              y: function(d){ return d.y; },
			      xAxis: {
			        axisLabel: 'Age'
			      },
			      yAxis: {
			        axisLabel: 'Amount'
			      }
			    }
			  };

});