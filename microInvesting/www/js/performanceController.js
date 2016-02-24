angular.module('starter.controllers').controller('PerformanceCtrl', function ($scope, $stateParams, $state) {

  $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "test 1", "test 2"];
  $scope.pieData = [300, 100, 200, 400, 150];
  $scope.pieOptions = {
    showTooltips: true,
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2
  };

  $scope.balancedLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  $scope.type = 'StackedBar';

  //balance
  $scope.balanceData = [
    [0, 20, 0, 0, 30],
    [10, 15, 15, 19, 17],
    [65, 60, 77, 95, 85]
  ];

  $scope.composite = [
    {
      title: 'Large Company Stocks',
      percentage: '17%'
    },
    {
      title: 'Small Company Stocks',
      percentage: '15%'
    },
    {
      title: 'Corporate Bonds',
      percentage: '21%'
    },
    {
      title: 'Government Bonds',
      percentage: '12%'
    },
    {
      title: 'Large Company Stocks',
      percentage: '25%'
    },
    {
      title: 'Large Company Stocks',
      percentage: '25%'
    }
  ]

});
