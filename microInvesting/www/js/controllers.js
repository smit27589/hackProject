angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, LoginService, $state) {

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
    };


    $scope.showHeaderBar = false;
    $scope.$on('$stateChangeSuccess',
      function (event, toState, toParams, fromState, fromParams) {
        if ($state.$current.name === 'app.intro') {
          $scope.showHeaderBar = false;
        }else{
          $scope.showHeaderBar = true;
  		}
      });

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

  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate,$location) {

    // Called to navigate to the main app
    $scope.login = function () {
      $state.go('app.login');
  };

    $scope.signup = function () {
      $state.go('app.signUpSlide');
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

.controller('TransferCtrl', function($scope, $stateParams,$state) {
})

.controller('SignUpCtrl', function($scope, $state, $ionicSlideBoxDelegate, LoginService) {

	LoginService.setNewUser(true);
	$scope.categoryPerformanceMap = {'conservative':[{title:'Year to Date',value :'-0.27'},
	                                                 {title:'6 Month',value :'-1.37'},
	                                                 {title:'1 Year',value :'-1.33'},
	                                                 {title:'2 Year',value :'5.66'},
	                                                 {title:'3 Year',value :'8.27'}],
	                                 'moderate':[{title:'Year to Date',value :'-1.79'},
	            	                                                 {title:'6 Month',value :'-3.78'},
	            	                                                 {title:'1 Year',value :'-2.36'},
	            	                                                 {title:'2 Year',value :'4.82'},
	            	                                                 {title:'3 Year',value :'10.53'}],
	            	                 'growth':[{title:'Year to Date',value :'-3.29'},
	            	            	                                                 {title:'6 Month',value :'-6.10'},
	            	            	                                                 {title:'1 Year',value :'-3.37'},
	            	            	                                                 {title:'2 Year',value :'4.02'},
	            	            	                                                 {title:'3 Year',value :'12.83'}],
	            	            	 'aggresive':[{title:'Year to Date',value :'-4.72'},
	            	            	            	                                                 {title:'6 Month',value :'-8.29'},
	            	            	            	                                                 {title:'1 Year',value :'-4.36'},
	            	            	            	                                                 {title:'2 Year',value :'3.22'},
	            	            	            	                                                 {title:'3 Year',value :'15.28'}]
	            	            	            	                                                 					};

	$scope.compositeMap = {'conservative':[{title:'Fixed Income',value :'80.42'},
	                                                 {title:'Financials',value :'3.88'},
	                                                 {title:'Info Tech',value :'3.23'},
	                                                 {title:'Healthcare',value :'2.70'},
	                                                 {title:'Industrials',value :'2.24'},
	                                                 {title:'Consumer Disc',value :'2.23'},
	                                                 {title:'Consumer Staples',value :'1.34'},
	                                                 {title:'Energy',value :'1.25'},
	                                                 {title:'Materials',value :'0.92'},
	                                                 {title:'Telecom',value :'0.63'},
	                                                 {title:'Utilities',value :'0.56'}],
	                                 'moderate':[{title:'Fixed Income',value :'60.53'},
                                                 {title:'Financials',value :'8.27'},
                                                 {title:'Info Tech',value :'6.71'},
                                                 {title:'Healthcare',value :'5.44'},
                                                 {title:'Industrials',value :'4.19'},
                                                 {title:'Consumer Disc',value :'4.58'},
                                                 {title:'Consumer Staples',value :'2.85'},
                                                 {title:'Energy',value :'2.73'},
                                                 {title:'Materials',value :'1.74'},
                                                 {title:'Telecom',value :'1.38'},
                                                 {title:'Utilities',value :'1.25'}],
	            	                 'growth':[{title:'Fixed Income',value :'40.41'},
                                               {title:'Financials',value :'12.81'},
                                               {title:'Info Tech',value :'8.67'},
                                               {title:'Healthcare',value :'7.83'},
                                               {title:'Industrials',value :'6.12'},
                                               {title:'Consumer Disc',value :'6.54'},
                                               {title:'Consumer Staples',value :'1.34'},
                                               {title:'Energy',value :'4.04'},
                                               {title:'Materials',value :'2.55'},
                                               {title:'Telecom',value :'2.19'},
                                               {title:'Utilities',value :'1.92'}],
	            	            	 'aggresive':[{title:'Fixed Income',value :'15.93'},
	                                                 {title:'Financials',value :'17.93'},
	                                                 {title:'Info Tech',value :'11.29'},
	                                                 {title:'Healthcare',value :'10.69'},
	                                                 {title:'Industrials',value :'9.14'},
	                                                 {title:'Consumer Disc',value :'9.40'},
	                                                 {title:'Consumer Staples',value :'5.87'},
	                                                 {title:'Energy',value :'4.82'},
	                                                 {title:'Materials',value :'3.80'},
	                                                 {title:'Telecom',value :'2.68'},
        {title: 'Utilities', value: '2.39'}]
    };


    $scope.textMap = {
      'conservative': 'Low risk Investors - Conservative Investors have a preference for lower risk investments with the focus on being able to earn return while taking a minimal risk.',
      'moderate': 'Moderate Investors have a preference for a higher level of income than a conservative investor deos.Moderate Investors are low to medium risk investors.',
      'growth': 'Growth Investors have a preference towards a slightlymore aggresive balance of investments. Theyemphasize growth over income.Growth Investors are medium to high risk investors.',
      'aggresive': 'Aggresive Investors are willing to take greater risks for the potential of making greater returns in the long run.Their focus is on wealth creation.High risk Investors'
    };

    $scope.etfMap = {
      'conservative': ['conservative'],
      'moderate': ['moderate'],
      'growth': ['growth'],
      'aggresive': ['aggresive']
    };

    $scope.data = {conservative: 10, moderate: 25, growth: 50, aggresive: 15}

    $scope.agree = function () {
      $state.go('app.summary');
    };

    $scope.disagree = function () {
      $state.go('app.login');
    };

	$scope.selectedCategory = "conservative";
	$scope.setSelected = function(type) {
        $scope.selectedCategory = type;
    };
    $scope.isSelected = function(type) {
        return type === $scope.selectedCategory;
    };


	$scope.active = 'performance';
    $scope.setActive = function(type) {
        $scope.active = type;
    };
    $scope.isActive = function(type) {
        return type === $scope.active;
    };

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
	LoginService.setNewUser(false);
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('app.summary');
            LoginService.setSideMenuVisibility(true);
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    };

    $scope.signUp = function(){
    	$state.go('app.signUpSlide');
    }

})

;
