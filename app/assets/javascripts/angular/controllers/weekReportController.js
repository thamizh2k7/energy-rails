energyApp.controller('weekReportController', function ($scope, $filter, $routeParams, seriesFactory, $interval) {
    $scope.search = {};
    $scope.chartConfig = {
        title: {
            text: 'Energy Chart Weekly'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                year: '%b',
                day: '%e. %b',
                hour: '%H:%M'
            },
            title: {
                text: 'Date'
            }
        },
    }
    $scope.submitReport = function () {
        //var startAt = moment($scope.search.startDay).subtract(1,'d').format('YYYYMMDD'),
        var startAt = moment($scope.search.startDay).format('YYYYMMDD'),

        endAt = moment($scope.search.endDay).format('YYYYMMDD')
        seriesFactory.getDayConsumption(startAt, endAt, "DEVICE-1").then(function (data) {
            if($scope.search.aggType=="day"){
                $scope.chartConfig.title.text = "Daily Report"

                seriesData= $filter('transformData')(data.data, startAt, endAt)
            }
            else{
                $scope.chartConfig.title.text = "Weekly Report"

                seriesData = $filter('aggDataFilter')(data.data)
            }
            $scope.chartConfig.series = [
                {
                    data: seriesData
                }
            ];
        })
    }
});