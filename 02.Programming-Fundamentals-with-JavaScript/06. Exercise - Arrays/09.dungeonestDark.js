function dungeonestDark(arr) {
    let value = "";

    let healthScore = 100;
    let coins = 0;
    let bestRoom = 0;
    let totalCoins = 0;
    let points = 0;

    for(let i = 0; i < arr.length; i++) {
        value = arr[i];
    }

    newArray = "";
    newArray = value.split("|");

    let newArrayValue = "";

    for(let j = 0; j < newArray.length; j++) {
        newArrayValue = newArray[j];

        let divideWordAndPoints = "";
        divideWordAndPoints = newArrayValue.split(" ");

        let word = divideWordAndPoints[0];
        points = Number(divideWordAndPoints[1]);

        if(word === "potion") {
            healthScore += points;

            if(healthScore >= 100) {
                console.log(`You healed for ${100 - (healthScore - points)} hp.`);
                console.log(`Current health: 100 hp.`);
                healthScore = 100;
                bestRoom++;
            }else {
                bestRoom++;
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${healthScore} hp.`);
            }
        }else if(word === "chest") {
            coins += points;
            totalCoins += points;
            bestRoom++;
            console.log(`You found ${coins} coins.`);
            coins = 0;
        }else {
            healthScore -= points;
            bestRoom++;
            if(healthScore > 0) {
                console.log(`You slayed ${word}.`)
            }else {
                console.log(`You died! Killed by ${word}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }

    if(healthScore > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${healthScore}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("---------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



//SECOND VARIANT

function dungeonestDark(input) {
    let initialHealth = 100;
    let initialCoins = 0;
    let newArray = input.join("").split('|');
    let bestRoom = 0;
    let temporaryHealth = 0;

    for(let i = 0; i < newArray.length; i++) {
        let pair = newArray[i]; 
        let pairArray = pair.split(" ");
        
        let name = pairArray[0];
        let number = Number(pairArray[1]);

       if(name === "potion") {
            temporaryHealth = initialHealth;
            initialHealth += number;

            if(initialHealth > 100) {
                initialHealth = 100;
                number = initialHealth - temporaryHealth;
            }

            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${initialHealth} hp.`)
            bestRoom++;

       }else if(name === "chest") {
        initialCoins += number;
        console.log(`You found ${number} coins.`);
        bestRoom++;

       }else {
            initialHealth -= number;

            if(initialHealth > 0) {
                console.log(`You slayed ${name}.`)
                bestRoom++;
            }else {
                console.log(`You died! Killed by ${name}.`);
                bestRoom++;
                break;
            }
       }

       name = "";
       number = 0;

    }
   
   if(initialHealth > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
   } else {
    console.log(`Best room: ${bestRoom}`);
   }

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
);