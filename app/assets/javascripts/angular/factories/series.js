energyApp.factory('seriesFactory', function (Api, $http, $httpParamSerializer) {
    var service= {};
    service.getConsumption = function (date, device) {
        var dateFormatted = moment(date).format('"YYYYMMDD"')
        var getParams = {
            orderBy: '"date"',
            startAt: dateFormatted,
            endAt: dateFormatted
        }
        return $http.get(Api.base + Api.path + device + ".json?" + $httpParamSerializer(getParams));
    }
    service.getDayConsumption = function (startDate, endDate, device) {
        var getParams = {
            orderBy: '"date"',
            startAt: '"'+startDate+'"',
            endAt: '"'+endDate+'"'
        }
        return $http.get(Api.base + Api.path + device + ".json?" + $httpParamSerializer(getParams));
    }
    return service;
})