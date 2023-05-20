function spiceMustFlow(startingYield) {
  let totalDays = 0;
  let totalSpecies = 0;

  while (Number(startingYield) >= 100) {
    let species = startingYield - 26;

    totalSpecies += species;

    totalDays++;
    startingYield -= 10;
  }

  if (totalSpecies >= 26) {
    totalSpecies -= 26;
  }

  console.log(totalDays);
  console.log(totalSpecies);
}

spiceMustFlow(111);
console.log("----------");
spiceMustFlow(450);
