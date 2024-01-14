function manOWar(input) {
    let pirateship = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxSectionHealth = Number(input.shift());
    let command = "";
    let i = 0;
    let isRetire = false;
  
  
      while (command !== "Retire") {

        if(isRetire === true) {
            break;
        }

          let infoLine = input[i].split(" ");
          i++;
  
          command = infoLine[0];
  
          if (command === "Fire") {
          //PirateShip attack Warship
          let index = Number(infoLine[1]);
          let damage = Number(infoLine[2]);
  
          if (index >= 0 && index <= warship.length) {
              let section = warship[index];
              if (section >= 0) {
              warship[index] = Number(warship[index]) - damage;
              } else {
              console.log(`You won! The enemy ship has sunken`);
              return;
              }
          }
          } else if (command === "Defend") {
          //WarShip attack PirateShip
          let startIndex = Number(infoLine[1]);
          let endIndex = Number(infoLine[2]);
          let defendDamage = Number(infoLine[3]);
  
          if (startIndex >= 0 && endIndex <= pirateship.length) {
              for (let j = startIndex; j <= endIndex; j++) {
              let pirateSection = pirateship[j];
  
              pirateship[j] = pirateSection - defendDamage;
              if (pirateship[j] <= 0) {
                  isRetire = true;
                  console.log(`You lost! The pirate ship has sunken.`);
                  return;
                  
              }
              }
          }
          } else if (command === "Repair") {
          //Crew repair the PirateShip
          let repairIndex = Number(infoLine[1]);
          let health = Number(infoLine[2]);
  
          if (repairIndex >= 0 && repairIndex < pirateship.length) {
              pirateship[repairIndex] += health;
              pirateship[repairIndex] = Math.min(pirateship[repairIndex], maxSectionHealth);
          }
          } else if (command === "Status") {
          let count = maxSectionHealth * (20 / 100);
  
          let needRepair = pirateship.filter((section) => section < count).length;
  
          console.log(`${needRepair} sections need repair.`);
          }
      }
  
  
      if(!isRetire) {
        let initialValue = 0;
      let pirateshipSectionSum = pirateship.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        initialValue
      );
      let warshipSectionSum = warship.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        initialValue
      );
      console.log(`Pirate ship status: ${pirateshipSectionSum}`);
      console.log(`Warship status: ${warshipSectionSum}`);
      }
    
  }

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

console.log("---------");

manOWar([
  "2>3>4>5>2",

  "6>7>8>9>10>11",

  "20",

  "Status",

  "Fire 2 3",

  "Defend 0 4 11",

  "Repair 3 18",

  "Retire",
]);
