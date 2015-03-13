var myApp = angular.module("segstory",[])
.controller('Main',function($scope){
  $scope.range = function(min, max, prefix){
    step = 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(prefix+i);
    return input;
  };
  $scope.household_count = function(adults,kids){
    if(isNaN(adults))adults=0;
    if(isNaN(kids))kids=0;
    if(adults<=2) return adults;
    adults=2;
    return parseInt(kids)+parseInt(adults);
  };
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
  // Inject url parameters into $scope
  var params=urlParams();
  for(key in params){
    if(typeof $scope[key] == "string")
      $scope[key]=params[key];
    else
      $scope[key]=Number(params[key]);
  }
});

function urlParams(){
  params={};
  var uparams=window.location.toString().split('&');
  if(uparams.length<2) return [];
  uparams[0]=uparams[0].split('?')[1];
  for(param in uparams){
    var key = uparams[param].split("=")[0];
    var value = uparams[param].split("=")[1];
    params[key]=value;
  }
  return params;
}
