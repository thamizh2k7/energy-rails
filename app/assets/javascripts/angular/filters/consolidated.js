energyApp.filter('transformData', function (Api) {
    return function (items,start,end) {
      var startTime = parseInt(moment(start,'YYYYMMDD').format('x'))+Api.timeAdjust
      var endTime = parseInt(moment(end,'YYYYMMDD').format('x'))+Api.timeAdjust
      var merged = []
      var result =  []
      angular.forEach(items,function(item){
       merged=  merged.concat(item.data)
      });
      angular.forEach(merged,function(item){
        if(item[0]>=startTime && item[0]<=endTime && item[1]!=undefined)
            result.push(item);
      })
      return result;
    };
  });