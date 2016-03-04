angular.module('starter.controllers').controller('TransactionsCtrl', function ($scope, $http) {

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

  function processData(datain) {

    $scope.dateData = {};
    var months = ['January', 'February', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
    datain.forEach(function (item) {
      var dateTime = new Date(item.postDate);
      var month = months[dateTime.getMonth()];
      var date = dateTime.getDate() + 'th';
      var year = dateTime.getFullYear();
      var dateStr = month + ' ' + date + ', ' + year;

      var list = $scope.dateData[dateStr] || [];

      switch (item.category) {
        case "Groceries":
          item.icon = 'fa-shopping-cart';
          break;
        case "Credit Card Payments":
          item.icon = 'fa-credit-card';
          break;
        case "Restaurants/Dining":
          item.icon = 'fa-cutlery';
          break;
        case "Travel":
          item.icon = 'fa-plane';
          break;
        case "Entertainment":
          item.icon = 'fa-ticket';
          break;
        default :
          item.icon = 'fa-money';
      }

      list.push(item);
      $scope.dateData[dateStr] = list;
    })

  }

  $scope.init = function () {

    $http.get('http://vishal-2.local:8080/getTransactions')
      .success(function(data) {
          processData(data);
      });

    //processData($scope.data);

  };

  $scope.clickType = function (type) {
    $scope.subTypes.forEach(function (itype) {
      itype.active = false;
    });

    type.active = true;
  };

  $scope.subTypes = [
    {title: 'Change', active: true},
    {title: 'Deposit', active: false},
    {title: 'Withdrawals',active:false}
  ];

  $scope.subData = {
    'Jan-12-2016': [{type: 'One time', amount: 50}],
    'Dec-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Nov-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Nov-07-2015': [{type: 'One time', amount: 15}],
    'Oct-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Sep-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Aug-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Jul-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}]
  };

  $scope.data = [{
    "description": "ShopRite",
    "currency": "USD",
    "amount": 3.72,
    "remainder": 0.28,
    "postDate": "Feb 21, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200762,
    "type": "debit",
    "merchantName": "ShopRite",
    "category": "Groceries"
  }, {
    "description": "Payment Thank You",
    "currency": "USD",
    "amount": 261.41,
    "remainder": 0.41,
    "postDate": "Feb 21, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200761,
    "type": "credit",
    "merchantName": "Payment Thank You",
    "category": "Credit Card Payments"
  }, {
    "description": "EUROPA NEW YORK xx6433 FAST FOOD RESTAURANT",
    "currency": "USD",
    "amount": 8.55,
    "remainder": 0.45,
    "postDate": "Feb 4, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200764,
    "type": "debit",
    "merchantName": "EUROPA",
    "category": "Restaurants/Dining"
  }, {
    "description": "MARCO\u0027S PIZZA",
    "currency": "USD",
    "amount": 8.25,
    "remainder": 0.75,
    "postDate": "Feb 3, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200765,
    "type": "debit",
    "merchantName": "MARCO\u0027S PIZZA",
    "category": "Restaurants/Dining"
  }, {
    "description": "ShopRite",
    "currency": "USD",
    "amount": 4.99,
    "remainder": 0.01,
    "postDate": "Feb 2, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200767,
    "type": "debit",
    "merchantName": "ShopRite",
    "category": "Groceries"
  }, {
    "description": "PREM CAR RENTAL PROTECTION 800- CRAxxxxx4304 01/30/2016 JERSEY CITY",
    "currency": "USD",
    "amount": 19.95,
    "remainder": 0.05,
    "postDate": "Feb 2, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200766,
    "type": "debit",
    "merchantName": "PREM CAR RENTAL P...",
    "category": "Travel"
  }, {
    "description": "Hertz car rental",
    "currency": "USD",
    "amount": 86.59,
    "remainder": 0.41,
    "postDate": "Feb 1, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200768,
    "type": "debit",
    "merchantName": "Hertz car rental",
    "category": "Travel"
  }, {
    "description": "Ticketmaster",
    "currency": "USD",
    "amount": 247.1,
    "remainder": 0.9,
    "postDate": "Jan 30, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200770,
    "type": "debit",
    "merchantName": "Ticketmaster",
    "category": "Entertainment"
  }, {
    "description": "EUROPA NEW YORK xx8997 FAST FOOD RESTAURANT",
    "currency": "USD",
    "amount": 10.62,
    "remainder": 0.38,
    "postDate": "Jan 29, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200771,
    "type": "debit",
    "merchantName": "EUROPA NEW YORK x...",
    "category": "Restaurants/Dining"
  }, {
    "description": "Delivery.com",
    "currency": "USD",
    "amount": 24.37,
    "remainder": 0.63,
    "postDate": "Jan 28, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200773,
    "type": "debit",
    "merchantName": "Delivery.com",
    "category": "Restaurants/Dining"
  }, {
    "description": "SOOM SOOM NEW YORK xxxxxxxxxxx xxx-xxx-6525",
    "currency": "USD",
    "amount": 8.71,
    "remainder": 0.29,
    "postDate": "Jan 28, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200772,
    "type": "debit",
    "merchantName": "SOOM SOOM NEW YOR...",
    "category": "Restaurants/Dining"
  }, {
    "description": "Fresco",
    "currency": "USD",
    "amount": 11.92,
    "remainder": 0.08,
    "postDate": "Jan 26, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200776,
    "type": "debit",
    "merchantName": "Fresco",
    "category": "Restaurants/Dining"
  }, {
    "description": "ShopRite",
    "currency": "USD",
    "amount": 34.36,
    "remainder": 0.64,
    "postDate": "Jan 26, 2016 12:00:00 AM",
    "processed": false,
    "transactionId": 13200775,
    "type": "debit",
    "merchantName": "ShopRite",
    "category": "Groceries"
  }];

});
