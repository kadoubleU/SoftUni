function treasureHunt(input) {
  let initialLoot = input.shift().split("|");
  let command = "";
  let index = 0;
  let countOfItems = 0;
  let itemsLengthSum = 0;

  while (command !== "Yohoho!") {
    let tokens = input[index].split(" ");
    index++;

    command = tokens.shift();

    if (command === "Loot") {
      for (let i = 0; i < tokens.length; i++) {
        let item = tokens[i];

        if (!initialLoot.includes(item)) {
          initialLoot.unshift(item);
        }
      }
    } else if (command === "Drop") {
      let indexOfItem = Number(tokens[0]);

      if (!isNaN(indexOfItem) && indexOfItem >= 0 && indexOfItem < initialLoot.length) {
        let removedItem = initialLoot.splice(indexOfItem, 1)[0];
        initialLoot.push(removedItem);
      }
    } else if (command === "Steal") {
      countOfItems = Number(tokens[0]);
      let stealedItems = [];

      for (let j = 1; j <= countOfItems; j++) {
        let stealItem = initialLoot.pop();
        stealedItems.unshift(stealItem);
      }

      console.log(stealedItems.join(", "));
    }
  }

  if (initialLoot.length > 0) {
    for (let k = 0; k < initialLoot.length; k++) {
      let itemName = initialLoot[k];
      let itemLength = Number(itemName.length);
      itemsLengthSum += itemLength;
    }

    let averageGain = (itemsLengthSum / Number(initialLoot.length)).toFixed(2);
    return `Average treasure gain: ${averageGain} pirate credits.`;

  } else {
    return `Failed treasure hunt.`
  }
}

console.log(
  treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!",
  ])
);

console.log("----------");

console.log(
  treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!",
  ])
);
