angular.module('starter.controllers').controller('PerformanceCtrl', function ($scope, $stateParams, $state) {

  $scope.investmentStartegyDollarData = [
    {categoryName: 'Conservative', value: '25.25'},
    {categoryName: 'Moderate', value: '115.25'},
    {categoryName: 'Growth', value: '124.50'},
    {categoryName: 'Aggresive', value: '64.53'}
  ];

  $scope.investmentStartegyPercentageData = [
    {categoryName: 'Conservative', value: '7.7'},
    {categoryName: 'Moderate', value: '35'},
    {categoryName: 'Growth', value: '37.8'},
    {categoryName: 'Aggresive', value: '19.5'}
  ];

  $scope.selected = "percentage";
  $scope.setSelected = function (type) {
    $scope.selected = type;
  };
  $scope.isSelected = function (type) {
    return type === $scope.selected;
  };

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
      title: 'Fixed Income',
      percentage: '20%'
    },
    {
      title: 'Mega Cap',
      percentage: '8%'
    },
    {
      title: 'Large Cap',
      percentage: '30%'
    },
    {
      title: 'Mid Cap',
      percentage: '30%'
    },
    {
      title: 'Small Cap',
      percentage: '12%'
    }
  ];

  $scope.composite2 = [
    {
      title: 'Balance From Last Month',
      percentage: '$271'
    },
    {
      title: 'Deposit',
      percentage: '$58'
    },
    {
      title: 'Withdrawal',
      percentage: '$0'
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
      donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
      donutRatio: 0.35,
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
      y: 20
    },
    {
      key: 'Mega Cap',
      y: 8
    },
    {
      key: 'Large Cap',
      y: 30
    },
    {
      key: 'Mid Cap',
      y: 30
    },
    {
      key: 'Small Cap',
      y: 12
    }
  ];


  $scope.vmoptions2 = {
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
      donut: true,          //Turn on Donut mode. Makes pie chart look tasty!
      donutRatio: 0.35,
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

  $scope.vmdata2 = [
    {
      key: "Conservative",
      y: 25.25
    },
    {
      key: 'Moderate',
      y: 115.25
    },
    {
      key: 'Groth',
      y: 124.5
    },
    {
      key: 'Aggressive',
      y: 64.53
    }
  ];



  var convertXValue = function (d) {
    var months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
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
      key: 'Balance',
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
          y: 130
        },
        {
          x: 3,
          y: 160
        },
        {
          x: 4,
          y: 170
        },
        {
          x: 5,
          y: 220
        },
        {
          x: 6,
          y: 180
        },
        {
          x: 7,
          y: 270
        },
        {
          x: 8,
          y: 330
        }
      ]
    },
    {
      key: 'Deposit',
      values: [
        {
          x: 0,
          y: 60
        },
        {
          x: 1,
          y: 20
        },
        {
          x: 2,
          y: 70
        },
        {
          x: 3,
          y: 30
        },
        {
          x: 4,
          y: 20
        },
        {
          x: 5,
          y: 50
        },
        {
          x: 6,
          y: 20
        },
        {
          x: 7,
          y: 90
        },
        {
          x: 8,
          y: 60
        }
      ]
    },
    {
      key: 'Withdrawal',
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
          y: 10
        },
        {
          x: 5,
          y: 0
        },
        {
          x: 6,
          y: 60
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
  ];



  $scope.lineOption = {
    chart: {
      type: 'stackedAreaChart',
      height: 450,
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

  $scope.lineData = [
    {
      key: 'Average',
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
          y: 130
        },
        {
          x: 3,
          y: 160
        },
        {
          x: 4,
          y: 170
        },
        {
          x: 5,
          y: 220
        },
        {
          x: 6,
          y: 180
        },
        {
          x: 7,
          y: 270
        },
        {
          x: 8,
          y: 330
        }
      ]
    },
    {
      key: 'Vishal',
      values: [
        {
          x: 0,
          y: 60
        },
        {
          x: 1,
          y: 20
        },
        {
          x: 2,
          y: 70
        },
        {
          x: 3,
          y: 30
        },
        {
          x: 4,
          y: 20
        },
        {
          x: 5,
          y: 50
        },
        {
          x: 6,
          y: 20
        },
        {
          x: 7,
          y: 90
        },
        {
          x: 8,
          y: 60
        }
      ]
    }
  ];



});
