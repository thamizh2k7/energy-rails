var energyApp = angular.module('energyApp', ['ngRoute','720kb.datepicker','highcharts-ng'])
energyApp.constant('Api', {
    base: 'https://angular-coding-challenge.firebaseio.com',
    path: "/timeseries/",
    timeAdjust: (-5*60*60*1000)
});