energyApp.filter('aggDataFilter', function (Api) {
    return function (items) {
        var merged = []
        angular.forEach(items, function (item) {
            summed = item.data.reduce(getSum,0)
            date = parseInt(moment(item.date).format('x'))
            merged = merged.concat([[date,summed]])
        });
        
        return merged;
    };
});

function getSum(total, num) {
    addNum = num[1] || 0
    return total + addNum
}