function orders(product, quantity) {
    switch (product) {
        case "coffee": return (1.50 * quantity).toFixed(2);
        case "coke": return  (1.40 * quantity).toFixed(2);
        case "water": return (1.00 * quantity).toFixed(2);
        case "snacks": return (2.00 * quantity).toFixed(2);
    }
}

console.log(orders("water", 5));
console.log(orders("coffee", 2));


//SECOND VARIANT

function orders(drink, drinksNumbers) {
    let totalPrice = 0;

    switch (drink) {
        case "coffee": totalPrice = (drinksNumbers * 1.50).toFixed(2); break;
        case "water": totalPrice = (drinksNumbers * 1.00).toFixed(2); break;
        case "coke": totalPrice = (drinksNumbers * 1.40).toFixed(2); break;
        case "snacks": totalPrice = (drinksNumbers * 2.00).toFixed(2); break;    
    }

    return totalPrice;
}

console.log(orders("water", 5));
console.log(orders("coffee", 2));

