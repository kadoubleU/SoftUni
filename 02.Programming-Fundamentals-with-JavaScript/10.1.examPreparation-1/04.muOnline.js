function muOnline(stringData) {
  let data = stringData.split("|");

  let initialHealth = 100;
  let bitcoins = 0;
    let bestRoom = 0;

  for(let index = 0; index < data.length; index++) {
    let input = data[index].split(" ");

    let name = input[0];
    let value = Number(input[1]);

    if(name === "potion") {
        if(initialHealth <= 100) {
            initialHealth += value;
            let difference = 0;
            if(initialHealth > 100) {
                difference = value - (initialHealth - 100);
                initialHealth = 100;
            }else {
                difference = value;
            }
            bestRoom++;
            console.log(`You healed for ${difference} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        }
    }else if(name === "chest") {
        bitcoins +=value;
        bestRoom++;
        console.log(`You found ${value} bitcoins.`);
    }else {
        initialHealth -= value;
        if(initialHealth > 0) {
            console.log(`You slayed ${name}.`);
            bestRoom++;
        }else {
            bestRoom++;
            console.log(`You died! Killed by ${name}.`);
            console.log(`Best room: ${bestRoom}`);
            break;
        }
    }
  }

  if(initialHealth > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${initialHealth}`);
  }
}

 muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
 muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
