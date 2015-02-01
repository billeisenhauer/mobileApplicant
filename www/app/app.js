// PeopleAdmin Applicant Mobile App

angular.module('paApplicant', ['ionic', "angular-data.DSCacheFactory"])

.run(function($ionicPlatform, DSCacheFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    DSCacheFactory("jobsCache", { storageMode: "localStorage", maxAge: 720000, deleteOnExpire: "aggressive" });
    DSCacheFactory("staticCache", { storageMode: "localStorage" });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "app/layout/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.jobs', {
      url: "/jobs",
      views: {
        'menuContent': {
          templateUrl: "app/jobs/jobs.html"
        }
      }
    })

    .state('app.single', {
      url: "/jobs/:jobId",
      views: {
        'menuContent': {
          templateUrl: "app/jobs/job.html"
        }
      }
    })

    .state('app.faves', {
      url: "/faves",
      views: {
        'menuContent': {
          templateUrl: "app/faves/faves.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/jobs');
});
