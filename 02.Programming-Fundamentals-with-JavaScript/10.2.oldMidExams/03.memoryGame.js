function memoryGame(data) {
  let elements = data.shift().split(" ");
  let length = elements.length - 1;
  let index = 0;
  let command = "";

  while (command !== "end") {
    command = data[index];
    index++;

    if (command !== "end") {
      let indexes = command.split(" ");

      let indexOne = Number(indexes[0]);
      let indexTwo = Number(indexes[1]);

      if (
        indexOne === indexTwo ||
        indexOne < 0 ||
        indexOne > length ||
        (indexTwo < 0 && indexTwo > length)
      ) {
        let stringCouple = `-${index}a`;

        let middleOfElements = length / 2;
        elements.splice(middleOfElements, 0, stringCouple, stringCouple);
        console.log("Invalid input! Adding additional elements to the board");
      } else {
        if (elements[indexOne] === elements[indexTwo]) {
          console.log(
            `Congrats! You have found matching elements - ${elements[indexOne]}!`
          );
          elements = elements.filter(value => value !== elements[indexOne]);
        } else {
          console.log("Try again!");
        }
      }
    }

    if (elements.length === 0) {
      console.log(`You have won in ${index} turns!`);
      return;
    }
  }

  let lastElement = data[data.length - 1];

  if (lastElement === "end") {
    console.log("Sorry you lose :(");
    console.log(`${elements.join(" ")}`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
