(function (){
'use strict';
angular.module('foodCounter',[])
.controller('foodCounterController',foodCounterController);
foodCounterController.$inject = ['$scope'];
function foodCounterController($scope){
  $scope.food = "";
  $scope.mesg = "";
  $scope.ifEmpty = "";

  $scope.calculateFoods = function(){

    var totalFoodCount = calculateFoodString($scope.food);
    if (totalFoodCount == 0){
      $scope.mesg = "Empty"
    }
    else if (totalFoodCount < 4){
      $scope.mesg = "Enjoy!";
      console.log(totalFoodCount)
    }else{
      $scope.mesg = "Too Much!";
    }
  };
  function calculateFoodString(string){
    var totalStringValue = 0;
    const foodArray = string.split(",");
    $scope.ifEmpty = emptyChecker(foodArray);
    if (foodArray[0]==''){
      totalStringValue = 0;
    }else{
      totalStringValue = foodArray.length;
    }

    return totalStringValue
  };
  function emptyChecker(arr){
    for(var i =0 ; i < arr.length ; i++){
      if(arr[i] == ''){
        return "You have empty item in input text"
      }

    };

  };

}

})();
