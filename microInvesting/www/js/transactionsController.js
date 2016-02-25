angular.module('starter.controllers').controller('TransactionsCtrl', function ($scope, $stateParams, $state) {

  $scope.transactionData = [{description: 'Whole Foods, Inc', amount: '$33.25', spareChange: '$0.75'},
    {description: 'Sunac Natural Food', amount: '$13.85', spareChange: '$0.15'},
    {description: 'Subway', amount: '$24.45', spareChange: '$0.55'},
    {description: 'Amazon,Inc', amount: '$33.25', spareChange: '$0.75'},
    {description: 'Zara', amount: '$133.03', spareChange: '$0.97'},
    {description: 'Subscription Service', amount: '$100', spareChange: '$100'},
    {description: 'Dunkin Donuts', amount: '$33.25', spareChange: '$0.75'},
    {description: 'Harry Pizzeria', amount: '$33.25', spareChange: '$0.75'},
    {description: 'Kati Roll Company', amount: '$11.89', spareChange: '$0.11'},
    {description: 'Sprint', amount: '$81.10', spareChange: '$0.90'},
    {description: 'Whole Foods, Inc', amount: '$123.36', spareChange: '$0.64'}
  ];


  $scope.init = function () {
    $scope.dateData = {};
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
    $scope.data.forEach(function (item) {
      var dateTime = new Date(item.postDate);
      var month = months[dateTime.getMonth()];
      var date = dateTime.getDate();
      var year = dateTime.getFullYear();
      var dateStr = month + '-' + date + '-' + year;

      var list = $scope.dateData[dateStr] || [];
      list.push(item);
      $scope.dateData[dateStr] = list;
    })


  };

  $scope.data = [{
    "description": "CODEY ARENA (973)xx1-38 xxxxxxxxxxx xxx-xxx-3828",
    "currency": "USD",
    "amount": 24.0,
    "remainder": 0.0,
    "postDate": "Jan 31, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200769,
    "type": "debit"
  }, {
    "description": "Ticketmaster",
    "currency": "USD",
    "amount": 247.1,
    "remainder": 0.9,
    "postDate": "Jan 30, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200770,
    "type": "debit"
  }, {
    "description": "EUROPA NEW YORK xx8997 FAST FOOD RESTAURANT",
    "currency": "USD",
    "amount": 10.62,
    "remainder": 0.38,
    "postDate": "Jan 29, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200771,
    "type": "debit"
  }, {
    "description": "Delivery.com",
    "currency": "USD",
    "amount": 24.37,
    "remainder": 0.63,
    "postDate": "Jan 28, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200773,
    "type": "debit"
  }, {
    "description": "SOOM SOOM NEW YORK xxxxxxxxxxx xxx-xxx-6525",
    "currency": "USD",
    "amount": 8.71,
    "remainder": 0.29,
    "postDate": "Jan 28, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200772,
    "type": "debit"
  }, {
    "description": "EGG O MANIA 8xxx0274JERSEY CITY xx8088 (201) xxx-4620",
    "currency": "USD",
    "amount": 72.0,
    "remainder": 0.0,
    "postDate": "Jan 27, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200774,
    "type": "debit"
  }, {
    "description": "Fresco",
    "currency": "USD",
    "amount": 11.92,
    "remainder": 0.08,
    "postDate": "Jan 26, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200776,
    "type": "debit"
  }, {
    "description": "ShopRite",
    "currency": "USD",
    "amount": 34.36,
    "remainder": 0.64,
    "postDate": "Jan 26, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200775,
    "type": "debit"
  }, {
    "description": "Payment Thank You",
    "currency": "USD",
    "amount": 347.34,
    "remainder": 0.34,
    "postDate": "Jan 23, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200777,
    "type": "credit"
  }, {
    "description": "BOXED.COM EDISON Boxed.com Offer",
    "currency": "USD",
    "amount": 15.0,
    "remainder": 0.0,
    "postDate": "Jan 19, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200778,
    "type": "credit"
  }, {
    "description": "BOXED BOXED EDISON CNWFMDD xxxxxx8979",
    "currency": "USD",
    "amount": 76.15,
    "remainder": 0.85,
    "postDate": "Jan 18, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200779,
    "type": "debit"
  }, {
    "description": "The Little Beet",
    "currency": "USD",
    "amount": 13.07,
    "remainder": 0.93,
    "postDate": "Jan 15, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200780,
    "type": "debit"
  }, {
    "description": "PAYMENT RECEIVED - THANK YOU",
    "currency": "USD",
    "amount": 400.0,
    "remainder": 0.0,
    "postDate": "Jan 13, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200782,
    "type": "credit"
  }, {
    "description": "Pret A Manger",
    "currency": "USD",
    "amount": 13.04,
    "remainder": 0.96,
    "postDate": "Jan 13, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200781,
    "type": "debit"
  }, {
    "description": "Delivery.com",
    "currency": "USD",
    "amount": 57.97,
    "remainder": 0.03,
    "postDate": "Jan 12, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200787,
    "type": "debit"
  }, {
    "description": "ANKA GRILL 1 ANKA GRNEW YORK xxxxx 642 LEXINGTON AVE. N",
    "currency": "USD",
    "amount": 11.7,
    "remainder": 0.3,
    "postDate": "Jan 12, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200784,
    "type": "debit"
  }, {
    "description": "Amazon.com",
    "currency": "USD",
    "amount": 29.99,
    "remainder": 0.01,
    "postDate": "Jan 12, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200783,
    "type": "debit"
  }, {
    "description": "Amazon.com",
    "currency": "USD",
    "amount": 16.73,
    "remainder": 0.27,
    "postDate": "Jan 11, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200786,
    "type": "debit"
  }, {
    "description": "Amazon.com",
    "currency": "USD",
    "amount": 67.62,
    "remainder": 0.38,
    "postDate": "Jan 11, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200785,
    "type": "debit"
  }, {
    "description": "AMC NEWPORT CTR #218JERSEY CITY xxxxxxxxxxx xxx-xxx-3258",
    "currency": "USD",
    "amount": 3.36,
    "remainder": 0.64,
    "postDate": "Jan 10, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200788,
    "type": "debit"
  }, {
    "description": "PAMPANO NEW YORK xxxxxxxxxx xxx-xxx-4545",
    "currency": "USD",
    "amount": 9.53,
    "remainder": 0.47,
    "postDate": "Jan 9, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200791,
    "type": "debit"
  }, {
    "description": "ShopRite",
    "currency": "USD",
    "amount": 17.11,
    "remainder": 0.89,
    "postDate": "Jan 9, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200790,
    "type": "debit"
  }];

});
