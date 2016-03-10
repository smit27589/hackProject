angular.module('starter.controllers').controller('LeaderboardCtrl', function($scope, $stateParams,$state) {

	$scope.friendsData =[{name:'Rishi Muktidhoot',coins:'910',image:'img/rishi.jpg'},
	                     {name:'Vishal Shah',coins:'790',image:'img/vishal.jpg'},
	                     {name:'Smit Gujarathi',coins:'560',image:'img/smit.jpg'},
	                     {name:'Wenjie Chen',coins:'380',image:'img/wenjie.jpg'},
	                     {name:'Ben Sanders',coins:'290',image:'img/ben.jpg'},
	                     {name:'Ravi Malhotra',coins:'270',image:'img/ravi.jpg'},
	                     {name:'Vijay Atmakuri',coins:'180',image:'img/vlad.jpg'}];
	
	 $scope.selected = "leaderboard";
	  $scope.setSelected = function (type) {
	    $scope.selected = type;
	  };
	  $scope.isSelected = function (type) {
	    return type === $scope.selected;
	  };

});