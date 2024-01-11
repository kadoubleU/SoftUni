function gladiatorInventory(data) {
  let inventory = data[0].split(" ");
  let peterInventory = inventory;

  for (let index = 1; index < data.length; index++) {
    let input = data[index].split(" ");

    let command = input[0];
    let item = input[1];
    let isInclude = peterInventory.includes(item);

    if (command === "Buy") {
      if (!isInclude) {
        peterInventory.push(item);
      }
    } else if (command === "Trash") {
      if (isInclude) {
        let equipmentIndex = peterInventory.indexOf(item);
        peterInventory.splice(equipmentIndex, 1);
      }
    } else if (command === "Repair") {
      if (isInclude) {
        let equipmentIndex = peterInventory.indexOf(item);
        let repair = peterInventory.splice(equipmentIndex, 1);
        repair = repair.join("");
        peterInventory.push(repair);
      }
    } else if (command === "Upgrade") {
      let newItem = item.split("-");
      let newItem1 = newItem[0];
      let upgradedVersion = newItem[1];
      let newVersion = `${newItem1}:${upgradedVersion}`;

      let isItemIncluded = peterInventory.includes(newItem1);

      if (isItemIncluded) {
        let equipmentIndex = peterInventory.indexOf(newItem1);
        peterInventory.splice(equipmentIndex + 1, 0, newVersion);
      }
    }
  }

  return peterInventory.join(" ");
}

console.log(
  gladiatorInventory([
    "SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
  ])
);

console.log("-----------");

console.log(
  gladiatorInventory([
    "SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
    "Upgrade Helmet-V",
  ])
);
