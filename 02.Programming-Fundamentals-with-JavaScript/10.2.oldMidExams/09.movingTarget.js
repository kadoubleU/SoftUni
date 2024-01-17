function movingTarget(data) {
  let targets = data.shift().split(" ").map(Number);

  let command = "";
  let index = 0;

  while (true) {
    let tokens = data[index].split(" ");
    index++;

    command = tokens.shift();

    if (command === "End") {
      break;
    }

    switch (command) {
      case "Shoot":
        shoot(tokens);
        break;
      case "Add":
        add(tokens);
        break;
      case "Strike":
        strike(tokens);
        break;
    }
  }

  console.log(targets.join("|"));

  function shoot(tokens) {
    let indexOfShoot = Number(tokens[0]);
    let power = Number(tokens[1]);

    if (targets.includes(targets[indexOfShoot])) {
      targets[indexOfShoot] -= power;
    }

    if (targets[indexOfShoot] <= 0) {
      targets.splice(indexOfShoot, 1);
    }
  }

  function add(tokens) {
    let indexOfAdd = Number(tokens[0]);
    let value = Number(tokens[1]);

    if (targets.includes(targets[indexOfAdd])) {
      targets.splice(indexOfAdd, 0, value);
    } else {
      console.log(`Invalid placement!`);
    }
  }

  function strike(tokens) {
    let indexOfStrike = Number(tokens[0]);
    let radius = Number(tokens[1]);

    if (
      indexOfStrike - radius < 0 ||
      indexOfStrike - radius > targets.length ||
      indexOfStrike + radius < 0 ||
      indexOfStrike + radius > targets.length ||
      indexOfStrike < 0 ||
      indexOfStrike > targets.length
    ) {
      console.log("Strike missed!");
    } else {
      targets.splice(indexOfStrike - radius, indexOfStrike + radius);
    }
  }
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
