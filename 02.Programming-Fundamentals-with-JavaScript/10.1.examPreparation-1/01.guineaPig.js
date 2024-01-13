function guineaPig(data) {
  let foodQuantitiy = Number(data[0]) * 1000;
  let hayQuantity = Number(data[1]) * 1000;
  let coverQuantity = Number(data[2]) * 1000;
  let guineaWeight = Number(data[3]) * 1000;

  for (let day = 1; day <= 30; day++) {
    foodQuantitiy -= 300;

    if (day % 2 === 0) {
      hayQuantity -= foodQuantitiy * 0.05;
    }

    if (day % 3 === 0) {
      coverQuantity -= (1 / 3) * guineaWeight;
    }

    if (foodQuantitiy <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
      return "Merry must go to the pet store!";
    }
  }

  foodQuantitiy /= 1000;
  hayQuantity /= 1000;
  coverQuantity /= 1000;

  return `Everything is fine! Puppy is happy! Food: ${foodQuantitiy.toFixed(
    2
  )}, Hay: ${hayQuantity.toFixed(2)}, Cover: ${coverQuantity.toFixed(2)}.`;
}

console.log(guineaPig(["10", "5", "5.2", "1"]));
console.log(guineaPig(["1", "1.5", "3", "1.5"]));
console.log(guineaPig(["9", "5", "5.2", "1"]));
