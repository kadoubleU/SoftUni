function excursionSale(input) {
    let seaExcursionNum = Number(input[0]);
    let mountainExcursionNum = Number(input[1]);

    index = 2;

    let typeExcursion = 0;
    let price = 0;
    let sum = 0;

    let seaCount = 0;
    let mountainCount = 0;

    while(index <= input.length || typeExcursion === "Stop") {
        typeExcursion = input[index];

        if(typeExcursion === "sea") {
            seaCount++;
            if(seaCount <= seaExcursionNum) {
                price = 680;
                sum += price;
            }
        }else if(typeExcursion === "mountain") {
            mountainCount++;
            if(mountainCount <= mountainExcursionNum) {
                price = 499;
                sum += price;
            }
        }

        index++;
    }

    if((seaCount >= seaExcursionNum) && (mountainCount >= mountainExcursionNum)) {
        console.log("Good job! Everything is sold.");
    }

    console.log(`Profit: ${sum} leva.`);
}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);

