angular.module('starter.controllers').controller('BankAccountCtrl', function($scope, $stateParams,$state) {

    $scope.init = function () {
        $http.get('http://vishal-2.local:8080/linkBankAccount')
                .success(function(data) {
                         $scope.fastLinkURL = data;
                         //document.getElementById('rsessionPost').submit();
                         }
                )};                       
});