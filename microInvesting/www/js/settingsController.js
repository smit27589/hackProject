angular.module('starter.controllers').controller('SettingsCtrl', function($scope, $stateParams,$state) {

	$scope.settingsData = [{settingDescription:'Edit Profile'},
	                       {settingDescription:'Bank and Cards'},
	                       {settingDescription:'Notifications'},
	                       {settingDescription:'FAQ'},
	                       {settingDescription:'Support'},
	                       {settingDescription:'Security'},
	                       {settingDescription:'Terms & Privacy'},
	                       {settingDescription:'Customer Agreement'},
	                       {settingDescription:'Disclosures'},
	                       {settingDescription:'Fees'},
	                       {settingDescription:'Sign Out'}];
	
	$scope.signOut = function(){
		$state.go('app.intro');
	};

});