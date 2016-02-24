/**
 * Created by wenchen on 2/24/2016.
 */
angular.module('starter.controllers').controller('SubscriptionsCtrl', function ($scope, $stateParams, $state) {

  $scope.money = {value: 10};

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
  }


});
