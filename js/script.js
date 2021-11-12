// Storage Controller

// Item Controller
const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [
            {id: 1, name: 'Uzum', clories: 200},
            {id: 2, name: 'Tuxum', clories: 1200},
            {id: 3, name: 'Sho`rva', clories: 600},
        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        logData: function(){
            return data
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    
})();

// App Controller
const AppCtrl = (function(ItemCtrl, UICtrl){
    
})(ItemCtrl, UICtrl);

console.log(ItemCtrl.logData());