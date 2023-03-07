class Hamburger {
    constructor (size, stuffing, topping) {
        this.size = size;
        this.stuffing = [];
        this.topping = [];
    }
    static SIZE_SMALL = {price: 50, calories:20}

    static SIZE_BIG = {price: 100, calories: 40}
 
    static STUFFING_CHEESE = {name: 'cheese', price: 10, calories:20}

    static STUFFING_SALAD = {name: 'salad', price: 20, calories:5}

    static STUFFING_POTATO = {name: 'potato', price: 15, calories:10}

    static TOPPING_MAYO = {name: 'mayo', price: 20, calories:5}
    
    static TOPPING_SEASONING = {name: 'seasoning', price: 15, calories: 0}

    addStuffing(stuffing){
        this.stuffing.push(stuffing)
    }

    addTopping(topping) {
        this.topping.push(topping);
    }
    calculatePrice() {
        let price = this.size.price;
        price += this.stuffing.reduce((total, stuffing) => total + stuffing.price, 0);
        price += this.topping.reduce((total, topping) => total + topping.price, 0);
        return price;
    }
    calculateCalories() {
        let calories = this.size.calories;
        calories += this.stuffing.reduce((total, stuffing) => total + stuffing.calories, 0);
        calories += this.topping.reduce((total, topping) => total + topping.calories, 0);
        return calories;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Price:" + hamburger.calculatePrice());

console.log("Calories:" + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SEASONING);

console.log("Price with seasoning:" + hamburger.calculatePrice());