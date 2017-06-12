// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.routes'])

// .value('ParseConfiguration', {
//         applicationId: "ca55fdafb12b30271452fc46e5c00e33db90805ecd7e736291cd63ac2cc87e7c",
//         javascriptKey: "85b50bf8d7abf9e5143a050aad3ef807"
//     })

.run(function($ionicPlatform, $rootScope, $state, $rootScope, $ionicLoading) {
  
  $rootScope.show = function(){
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    });
  };

  $rootScope.hide = function(){
    $ionicLoading.hide();
  };

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    Parse.initialize("ca55fdafb12b30271452fc46e5c00e33db90805ecd7e736291cd63ac2cc87e7c", "85b50bf8d7abf9e5143a050aad3ef807");
    Parse.serverURL = 'http://198.211.113.117:1337/nemasi';

  });
});
