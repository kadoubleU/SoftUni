function arrayModifier(data) {
    let arrayData = data.shift().split(" ").map(Number);

    for(let i = 0; i < data.length; i++) {
        let input = data[i].split(" ");
        let command = input[0];

        if(command === "end") {
            break;
        }

        let indexOne = Number(input[1]);
        let indexTwo = Number(input[2]);

        if(command === "swap") {
            let elementOne = arrayData[indexOne];
            let elementTwo = arrayData[indexTwo];

            arrayData.splice(indexOne, 1, elementTwo);
            arrayData.splice(indexTwo, 1, elementOne);

        }else if(command === "multiply") {
            let numOne = arrayData[indexOne];
            let numTwo = arrayData[indexTwo];
            let product = numOne * numTwo;

            arrayData.splice(indexOne, 1, product);

        }else if(command === "decrease") {
            arrayData = arrayData.map(x => x - 1);
        }
        
        
    }

    return arrayData.join(", ");
}

console.log(arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]));
