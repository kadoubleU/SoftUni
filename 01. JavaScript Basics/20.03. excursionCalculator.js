function excursionCalculator(input) {
    let peopleNumber = Number(input[0]);
    let season = input[1];

    let price = 0;

    if(season === "spring") {
        if(peopleNumber <= 5) {
            price = 50.00;
        }else if(peopleNumber > 5) {
            price = 48.00;
        }
    }else if(season === "summer") {
        if(peopleNumber <= 5) {
            price = 48.50;
        }else if(peopleNumber > 5) {
            price = 45.00;
        }

        price = price - (price * (15 / 100));

    }else if(season === "autumn") {
        if(peopleNumber <= 5) {
            price = 60.00;
        }else if(peopleNumber > 5) {
            price = 49.50;
        }
    }else if(season === "winter") {
        if(peopleNumber <= 5) {
            price = 86.00;
        }else if(peopleNumber > 5) {
            price = 85.00;
        }

        price = price + (price * (8 / 100));
    }

    let sum = peopleNumber * price;

    console.log(`${sum.toFixed(2)} leva.`);
}

excursionCalculator(["20",
"winter"])


