energyApp.filter('transformData', function (Api) {
    return function (items,start,end) {
      //var hours_to_add = (24*60*60*1000) - Math.abs(Api.timeAdjust);
      var startTime = parseInt(moment(start,'YYYYMMDD').format('x'))
      var endTime = parseInt(moment(end,'YYYYMMDD').add(1,'d').format('x'))
      var merged = []
      var result =  []
      angular.forEach(items,function(item){
       merged=  merged.concat(item.data)
      });
      angular.forEach(merged,function(item){
        if(item[0]>=startTime && item[0]<=endTime)
            result.push([item[0]+Api.timeAdjust,item[1]]);
      })
      return result;
    };
  });