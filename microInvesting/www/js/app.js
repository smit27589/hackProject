// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','chart.js','nvd3'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
//    if (window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//      cordova.plugins.Keyboard.disableScroll(true);

//    }
//    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
//      StatusBar.styleDefault();
//    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller:'LoginCtrl'
      }
    }
  })

  .state('app.intro', {
    url: '/intro',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro.html',
        controller:'IntroCtrl'
      }
    }
  })

  .state('app.signUpSlide', {
    url: '/signUpSlide',
    views: {
      'menuContent': {
        templateUrl: 'templates/signUpSlide.html',
        controller:'SignUpCtrl'
      }
    }
  })

   .state('app.summary', {
    url: '/summary',
    views: {
      'menuContent': {
        templateUrl: 'templates/summary.html'
      }
    }
  })

   .state('app.subscriptions', {
    url: '/subscriptions',
    views: {
      'menuContent': {
        templateUrl: 'templates/subscriptions.html',
        controller:'SubscriptionsCtrl'
      }
    }
  })

   .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller:'SettingsCtrl'
      }
    }
  })

  .state('app.performance', {
    url: '/performance',
    views: {
      'menuContent': {
        templateUrl: 'templates/performance.html',
        controller:'PerformanceCtrl'
      }
    }
  })

   .state('app.transactions', {
    url: '/transactions',
    views: {
      'menuContent': {
        templateUrl: 'templates/transactions.html',
        controller:'TransactionsCtrl'
      }
    }
  })

  .state('app.inviteFriends', {
    url: '/inviteFriends',
    views: {
      'menuContent': {
        templateUrl: 'templates/inviteFriends.html',
        controller:'InviteFriendsCtrl'
      }
    }
  })
  
  .state('app.whatIf', {
    url: '/whatIf',
    views: {
      'menuContent': {
        templateUrl: 'templates/whatIf.html',
        controller:'WhatIfCtrl'
      }
    }
  })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
	  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');
});
