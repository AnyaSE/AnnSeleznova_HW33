class Hamburger {
    constructor (size, stuffing, topping, price, calories) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.price = price;
        this.calories = calories;
    }
    static SIZE_SMALL() {
        return new Hamburger('small', [], [], 50, 20)
    }
    static SIZE_BIG() {
        return new Hamburger ('big', [], [], 100, 40)
    }  
    static STUFFING_CHEESE () {
        return {name: 'cheese', price: 10, calories:20}
    }
    static STUFFING_SALAD () {
        return {name: 'salad', price: 20, calories:5}
    }
    static STUFFING_POTATO () {
        return {name: 'potato', price: 15, calories:10}
    }
    addStuffing(stuffing){
        this.stuffing.push(stuffing)
    }
    static TOPPING_MAYO(){
        return {name: 'mayo', price: 20, calories:5}
    }
    static TOPPING_SEASONING(){
        return {name: 'seasoning', price: 15, calories: 0}
    }
    addTopping(topping) {
        this.topping.push(topping);
    }
    calculatePrice() {
        let price = this.price;
        if (this.size.name === Hamburger.SIZE_SMALL().name) {
            price += Hamburger.SIZE_SMALL().price;
        } else if (this.size.name === Hamburger.SIZE_BIG().name) {
            price += Hamburger.SIZE_BIG().price;
        }
        this.stuffing.forEach((stuffing) => {
            price += stuffing.price;
        });
        this.topping.forEach((topping) => {
            price += topping.price;
        });
        return price;
    }
    calculateCalories() {
        let calories = this.calories;
        if (this.size.name === Hamburger.SIZE_SMALL().name) {
            calories += Hamburger.SIZE_SMALL().calories;
        } else if (this.size.name === Hamburger.SIZE_BIG().name) {
            calories += Hamburger.SIZE_BIG().calories;
        }
        this.stuffing.forEach((stuffing) => {
            calories += stuffing.calories;
        });
        this.topping.forEach((topping) => {
            calories += topping.calories;
        });
        return calories;
    }
} 
const hamburger = new Hamburger(Hamburger.SIZE_SMALL(), [Hamburger.STUFFING_CHEESE()], [], 0, 0);

hamburger.addTopping(Hamburger.TOPPING_MAYO());

console.log("Price:" + hamburger.calculatePrice());

console.log("Calories:" + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SEASONING());

console.log("Price with seasoning:" + hamburger.calculatePrice());