angular.module('starter.controllers').controller('TransactionsCtrl', function ($scope, $http) {

  $scope.init = function () {
    $http.get('http://localhost:8080/getTransactions')
    	.success(function(data) {
        $scope.dateData = {};
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
        data.forEach(function (item) {
          var dateTime = new Date(item.postDate);
          var month = months[dateTime.getMonth()];
          var date = dateTime.getDate();
          var year = dateTime.getFullYear();
          var dateStr = month + '-' + date + '-' + year;

          var list = $scope.dateData[dateStr] || [];
          list.push(item);
          $scope.dateData[dateStr] = list;
        })
    });

  };

});
