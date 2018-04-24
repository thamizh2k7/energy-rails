energyApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/dayReport", {
        templateUrl : "/assets/dayReport.html",
        controller : "dayReportController"
    })
    .when("/weekReport", {
        templateUrl : "/assets/weekReport.html",
        controller : "weekReportController"
    })
    $locationProvider.html5Mode(true);
});