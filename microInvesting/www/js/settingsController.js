angular.module('starter.controllers').controller('SettingsCtrl', function($scope, $stateParams,$state) {

	$scope.settingsData1 = [{settingDescription:'Edit Profile', icon:'fa fa-user fa-fw fa-inverse'},
	                       {settingDescription:'Linked Accounts', icon:'fa fa-university fa-fw fa-inverse'},
	                       {settingDescription:'Withdrawal', icon:'fa fa-exchange fa-fw fa-inverse'},
	                       {settingDescription:'Add PIN', icon:'fa fa-lock  fa-fw fa-inverse'}];
	
	$scope.settingsData2 = [ {settingDescription:'Push Notifications', icon:'fa fa-mobile fa-fw fa-inverse'},
	                       {settingDescription:'Email Notifications', icon:'fa fa-envelope fa-fw fa-inverse'}]
	
	$scope.settingsData3 = [{settingDescription:'FAQ', icon:'fa fa-question-circle fa-fw fa-inverse'},
		                       {settingDescription:'Support', icon:'fa fa-life-ring fa-fw fa-inverse'},
		                       {settingDescription:'Terms & Privacy', icon:'fa fa-file-text-o fa-fw fa-inverse'},
		                       {settingDescription:'Sign Out', icon:'fa fa-sign-out fa-fw fa-inverse'}];
	
	$scope.signOut = function(){
		$state.go('app.intro');
	};

});