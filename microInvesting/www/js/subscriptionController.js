/**
 * Created by wenchen on 2/24/2016.
 */
angular.module('starter.controllers').controller('SubscriptionsCtrl', function ($scope, $stateParams, $state) {

  $scope.money = {value: 25};

  $scope.add = function () {
    $scope.money.value += 1;

  };

  $scope.sub = function () {
    $scope.money.value -= 1;
  };

  $scope.subTypes = [
    {title: 'Weekly', active: true},
    {title: 'Monthly', active: false},
    {title: 'Quaterly', active: false}
  ];

  $scope.clickType = function (type) {
    $scope.subTypes.forEach(function (itype) {
      itype.active = false;
    });

    type.active = true;
  };

  $scope.submit = function () {
    $state.go('app.summary');
  }

  $scope.clickTypett = function (type) {
    $scope.subTypeArr.forEach(function (itype) {
      itype.active = false;
    });

    type.active = true;
  };

  $scope.subTypeArr = [
    {title: 'Onetime', active: true},
    {title: 'Recurring', active: false}
  ];


});
