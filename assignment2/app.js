(function (){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    try{
      toBuy.items = ShoppingListCheckOffService.getItems1();
    }catch(error){
      toBuy.errorMessage = error.message;
    }


    toBuy.removeItem = function (itemIndex ,item) {
      ShoppingListCheckOffService.removeItem(itemIndex);
      ShoppingListCheckOffService.addItem(item.name , item.quantity);
  };
}
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.items = ShoppingListCheckOffService.getItems2();
  }
  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyShoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
  ];


    var buyItemShoppingList = [];
    service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    buyItemShoppingList.push(item);
    };
    service.removeItem = function (itemIndex) {
    toBuyShoppingList.splice(itemIndex, 1);
    };
    service.getItems1 = function () {
      if(toBuyShoppingList.length == 0){
        throw new Error("list is empty");

      }else{
        return toBuyShoppingList;
      }


    };
    service.getItems2 = function (){
      return buyItemShoppingList;
    };

}

})();
