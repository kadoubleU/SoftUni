function inventory(input) {
    let inventoryItems = input.shift().split(", ");

    let command = "";
    let index = 0;

    while(command !== "Craft!") {
        let data = input[index];
        if(data === "Craft!") {
            break;
        }

        data = data.split(" - ");
        index++;
        let command = data[0];
        let item = data[1];

        switch (command) {
            case "Collect":
                if(!inventoryItems.includes(item)) {
                    inventoryItems.push(item);
                }
                break;
            case "Drop":
                if(inventoryItems.includes(item)) {
                    let indexOfItem = inventoryItems.indexOf(item);
                    inventoryItems.splice(indexOfItem, 1);
                }
                break;
            case "Combine Items":
                let divideItems = item.split(":");
                let oldItem = divideItems[0];
                let newItem = divideItems[1];

                if(inventoryItems.includes(oldItem)) {
                    let indexOfOldItem = inventoryItems.indexOf(oldItem);
                    inventoryItems.splice(indexOfOldItem, 1, oldItem, newItem);
                }
                break;
            case "Renew":
                if(inventoryItems.includes(item)) {
                    let indexOfIncludedItem = inventoryItems.indexOf(item);
                    let splicedItem = inventoryItems.splice(indexOfIncludedItem, 1);
                    inventoryItems.push(splicedItem);
                }
                break;
        }
        
    }

    return inventoryItems.join(", ");
}

console.log(
  inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"])
);
console.log("---------");
console.log(
  inventory([
    "Iron, Sword",
    "Drop - Bronze",
    "Combine Items - Sword:Bow",
    "Renew - Iron",
    "Craft!",
  ])
);
