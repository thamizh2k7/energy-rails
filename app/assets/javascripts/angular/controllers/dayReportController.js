energyApp.controller('dayReportController', function ($scope, $filter, $routeParams, seriesFactory, $interval) {
    $scope.search = {};
    $scope.chartConfig = {
        title: {
            text: 'Energy Chart'
        }
    }
    $scope.addSeries = function () {
        if (empty($scope.search.day)) {
            $scope.search.day = "2016-07-01"
        }
        var startAt = moment($scope.search.day).subtract(1,'d').format('YYYYMMDD'),
            endAt = moment($scope.search.day).format('YYYYMMDD')
        seriesFactory.getDayConsumption(startAt, endAt, "DEVICE-1").then(function (data) {
            if($scope.search.aggType=="day"){
                seriesData= $filter('transformData')(data.data, startAt, endAt)
            }
            else{
                seriesData = $filter('aggDataFilter')(data.data, startAt, endAt)
            }
            $scope.chartConfig.series = [
                {
                    data: seriesData
                }
            ];
        })
    }
});