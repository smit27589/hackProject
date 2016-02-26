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
  ];

  var color = ["#009A3D", "#0079C1", "#6C207E", "#E31B23",
    "#F8971D", "#FFD200", "#59BD81", "#59A7D7",
    "#9F6FAA", "#ED6B70", "#FABB6B", "#FFE159",
    "#B3E0C5", "#B3D6ED", "#D3BCD8", "#F39B9D",
    "#FDE0BB", "#FFF1B3"];

  $scope.vmoptions = {
    chart: {
      type: 'pieChart',
      height: 250,
      color: color,
      x: function (d) {
        return d.key;
      },
      y: function (d) {
        return d.y;
      },
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      showLabels: false,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      legend: {
        margin: {
          top: 5,
          right: 25,
          bottom: 5,
          left: 0
        }
      }
    }
  };

  $scope.vmdata = [
    {
      key: "Fixed Income",
      y: 5
    },
    {
      key: 'Mega Cap',
      y: 2
    },
    {
      key: 'Large Cap',
      y: 9
    },
    {
      key: 'Four',
      y: 7
    },
    {
      key: 'Five',
      y: 4
    }
  ];

  var convertXValue = function (d) {
    var months = ['Jun','Jul','Aug','Sep','Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    return months[d];
  };


  var colorBar = ["#009A3D", "#0079C1", "#E31B23"];

  $scope.balancedOptions = {
    chart: {
      type: 'multiBarChart',
      height: 250,
      color: colorBar,
      clipEdge: true,
      staggerLabels: true,
      rotateLabels: 45,
      reduceXTicks: false,
      transitionDuration: 500,
      stacked: true,
      margin: {
        top: 10,
        right: 20,
        bottom: 30,
        left: 25
      },
      xAxis: {
        tickFormat: function (d) {
          return convertXValue(d);
        }
      },
      yAxis: {
        tickFormat: function (d) {
          return d;
        }
      },
      legend: {
        margin: {
          top: 5,
          right: 25,
          bottom: 5,
          left: -10
        }
      }
    }
  };

  $scope.balanceD3Data = [
    {
      key: 'balance',
      values: [
        {
          x: 0,
          y: 60
        },
        {
          x: 1,
          y: 60
        },
        {
          x: 2,
          y: 77
        },
        {
          x: 3,
          y: 95
        },
        {
          x: 4,
          y: 100
        },
        {
          x: 5,
          y: 120
        },
        {
          x: 6,
          y: 50
        },
        {
          x: 7,
          y: 85
        },
        {
          x: 8,
          y: 105
        }
      ]
    },
    {
      key: 'deposit',
      values: [
        {
          x: 0,
          y: 10
        },
        {
          x: 1,
          y: 15
        },
        {
          x: 2,
          y: 15
        },
        {
          x: 3,
          y: 19
        },
        {
          x: 4,
          y: 20
        },
        {
          x: 5,
          y: 20
        },
        {
          x: 6,
          y: 30
        },
        {
          x: 7,
          y: 15
        },
        {
          x: 8,
          y: 25
        }
      ]
    },
    {
      key: 'withdrawal',
      values: [
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 20
        },
        {
          x: 2,
          y: 0
        },
        {
          x: 3,
          y: 0
        },
        {
          x: 4,
          y: 50
        },
        {
          x: 5,
          y: 0
        },
        {
          x: 6,
          y: 100
        },
        {
          x: 7,
          y: 0
        },
        {
          x: 8,
          y: 0
        }
      ]
    }
  ]


});
