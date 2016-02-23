angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,LoginService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.showSideMenu = LoginService.getSideMenuVisibility();
  // Form data for the login modal
  $scope.loginData = {};
  $scope.userName = LoginService.getUserName();

  var updateSideMenuVisibility = function(){
	  $scope.showSideMenu = LoginService.getSideMenuVisibility();
  }

//  LoginService.registerObserverCallback(updateSideMenuVisibility);

//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
//  $scope.login = function() {
//    $scope.modal.show();
//  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.login');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})



.controller('SubscriptionsCtrl', function($scope, $stateParams,$state) {
})

.controller('TransactionsCtrl', function($scope, $stateParams,$state) {
})

.controller('TransferCtrl', function($scope, $stateParams,$state) {
})

.controller('SettingsCtrl', function($scope, $stateParams,$state) {
})

.controller('SignUpCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  // need to change it to agreement page
  $scope.startApp = function() {
    $state.go('app.summary');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('InviteFriendsCtrl', function($scope, $stateParams,$state) {
})

.controller('LoginCtrl', function($scope,LoginService, $ionicPopup, $state) {
	$scope.data = {username:'user@gmail.com',password:'secret'};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('app.performance');
            LoginService.setSideMenuVisibility(true);
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

    $scope.signUp = function(){
    	$state.go('app.signUpSlide');
    }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
