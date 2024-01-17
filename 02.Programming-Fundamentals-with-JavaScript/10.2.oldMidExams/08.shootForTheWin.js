function shootForTheWin(data) {
  let targetsAndValues = data.shift().split(" ").map(Number);

  let result = "";
  let index = 0;
  let shotTargets = 0;

  while (result !== "End") {
    result = data[index];
    index++;

    if (result === "End") {
      break;
    }

    if (result !== "End") {
      result = Number(result);
    }

    if (result >= 0 && result < targetsAndValues.length) {
      let isShooted = targetsAndValues[result];

      if (isShooted !== -1) {
        let shootValue = targetsAndValues[result];

        for (let i = 0; i < targetsAndValues.length; i++) {
          if (targetsAndValues[i] > shootValue && targetsAndValues[i] !== -1) {
            targetsAndValues[i] -= shootValue;
          } else if (
            targetsAndValues[i] <= shootValue &&
            targetsAndValues[i] !== -1
          ) {
            targetsAndValues[i] += shootValue;
          }
        }

        targetsAndValues[result] = -1;
        shotTargets++;
      }
    }
  }

  console.log(`Shot targets: ${shotTargets} -> ${targetsAndValues.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
