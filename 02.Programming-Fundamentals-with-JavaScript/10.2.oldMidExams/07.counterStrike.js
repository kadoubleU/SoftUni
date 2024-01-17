function counterStrike(data) {
  let initialEnergy = Number(data[0]);
  data.shift();

  let result = "";
  let index = 0;
  let wons = 0;

  while (result !== "End of battle") {
    result = data[index];
    index++;

    if (result === "End of battle") {
      break;
    }

    initialEnergy -= Number(result);

    if (initialEnergy < 0) {
      initialEnergy = 0;
      return `Not enough energy! Game ends with ${wons} won battles and ${initialEnergy} energy`;
    }
    wons++;
    if (wons >= 3 && wons % 3 === 0) {
      initialEnergy += wons;
    }
  }

  return `Won battles: ${wons}. Energy left: ${initialEnergy}`;
}

console.log(
  counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
);
console.log(counterStrike(["200", "54", "14", "28", "13", "End of battle"]));
