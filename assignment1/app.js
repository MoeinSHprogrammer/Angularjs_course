(function (){
'use strict';
angular.module('foodCounter',[])
.controller('foodCounterController',foodCounterController);
foodCounterController.$inject = ['$scope'];
function foodCounterController($scope){
  $scope.food = "";
  $scope.mesg = "";

  $scope.calculateFoods = function(){

    var totalFoodCount = calculateFoodString($scope.food);
    if (totalFoodCount == 0){
      $scope.mesg = "inpute data first!"
    }
    else if (totalFoodCount < 4){
      $scope.mesg = "Enjoy!";

    }else{
      $scope.mesg = "Too Much!";
    }
  };
  function calculateFoodString(string){
    var totalStringValue = 0;
    const foodArray = string.split(",");
    totalStringValue = emptyChecker(foodArray);
    if (foodArray[0]==''){
      totalStringValue = 0;
    }

    return totalStringValue
  };
  function emptyChecker(arr){
    var arrLength = arr.length;
    for(var i = 0 ; i < arr.length ; i++){
      if(arr[i] == ''){
        arrLength -= 1;
      }

    };
    return arrLength

  };

}

})();
