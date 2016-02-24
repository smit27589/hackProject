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

});
