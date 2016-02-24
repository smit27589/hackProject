angular.module('starter.controllers').controller('PerformanceCtrl', function ($scope, $stateParams, $state) {

  $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "test 1", "test 2"];
  $scope.pieData = [300, 100, 200, 400, 150];
  $scope.pieOptions = {
    showTooltips: true,
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2
  };


  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  $scope.type = 'StackedBar';

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
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
