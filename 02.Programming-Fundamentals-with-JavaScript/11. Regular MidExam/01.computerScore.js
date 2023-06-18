function computerScore(arr) {
    let index = 0;
    
    let sum = 0;

    while(arr[index] != ("special" || "regulara")) {

        let partPrice = arr[index];

        if(partPrice > 0) {
            sum += partPrice;
        }else {
            console.log("Invalid price!")
        }

        index++;
    }

    let taxes = sum * (20/100);

    let totalPrice = sum + taxes;

    if(arr[arr.length - 1] === "special") {
        totalPrice = totalPrice - (totalPrice * (10/100));
    }

    if(sum <= 0) {
        console.log('Invalid order!');
    }else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }

    
}

computerScore([1050, 200, 450, 2, 18.50, 16.86, "special"]);