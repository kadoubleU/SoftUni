function theLift(data) {
    let waitingPeople = Number(data.shift().split(" ").join(""));
  
    let liftWagons = data.join("").split(" ").map(Number);
    let therePeopleInQueue = false;
  
    for (let i = 0; i < liftWagons.length; i++) {
      let wagon = Number(liftWagons[i]);
  
      if (waitingPeople < 4) {
        liftWagons[i] = waitingPeople;
        waitingPeople -= waitingPeople;
      } else if (wagon === 0) {
        liftWagons[i] += 4;
        waitingPeople -= 4;
      } else if (wagon === 1) {
        liftWagons[i] += 3;
        waitingPeople -= 3;
      } else if (wagon === 2) {
        liftWagons[i] += 2;
        waitingPeople -= 2;
      } else if (wagon === 3) {
        liftWagons[i] += 1;
        waitingPeople -= 1;
      }else if (wagon === 4) {
        liftWagons[i] += 0;
        waitingPeople -= 0;
      }

      if (waitingPeople <= 0) {
        break;
      } else {
        therePeopleInQueue = true;
       
      }
    }
  
    let emptySpotsNumber = liftWagons.filter((x) => x < 4).length;
    let notEmptySPots = liftWagons.filter((x) => x >= 0);

    if (emptySpotsNumber > 0) {
      return `The lift has empty spots!\n${notEmptySPots.join(" ")}`;
    } else if (therePeopleInQueue) {
      return `There isn't enough space! ${waitingPeople} people in a queue!\n${liftWagons.join(" ")}`;
    }
  }

console.log(theLift(["15", "0 0 0 0 0"]));
console.log(theLift(["20", "0 2 0"]));
