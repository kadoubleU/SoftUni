function arrayManipulation(data) {
  let array = data[0].split(" ");

  for (let i = 1; i < data.length; i++) {
    let input = data[i].split(" ");

    let command = input[0];
    let number = Number(input[1]);
    let insertNum = Number(input[2]);

    if (command === "Add") {
      array.push(number);
    } else if (command === "Remove") {
      let newArr = [];

      for (let i = 0; i < array.length; i++) {
        if (number !== Number(array[i])) {
          newArr.push(Number(array[i]));
        }
      }
      array = newArr;

    } else if(command === "RemoveAt") {
        array.splice(number, 1);
    } else if(command === "Insert") {
        array.splice(insertNum, 0, number)
  } 

  }

  return array.join(" ");
}

console.log(
  arrayManipulation([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
  ])
);


console.log("-----");

console.log(
    arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])
  );