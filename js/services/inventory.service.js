angular.module('inventory').service('InvService', function(localStorageService) {
    var items = [{
        "id": 64,
        "name": "iPhone",
        "price": 499,
        "quantity": 2,
        "color": "white",
        "discount": 0
    }, ];


    function getInventory() {
        var itemsToReturn = localStorageService.get('items');
        if (!itemsToReturn) {
            itemsToReturn = items;
        }
        return itemsToReturn;
    }

    function setInventory(items) {
        localStorageService.set('items', items);
    }

    function updateInventory(item) {
      var itemsInStorage = localStorageService.get('items');
        for (var i = 0; i < itemsInStorage.length; i++) {
          if (itemsInStorage[i].id === item.id) {
            itemsInStorage[i].quantity = item.quantity;
          }
        }
        localStorageService.set('items', itemsInStorage);
    }


    return {
        get: getInventory,
        set: setInventory,
        update: updateInventory
    };
});
