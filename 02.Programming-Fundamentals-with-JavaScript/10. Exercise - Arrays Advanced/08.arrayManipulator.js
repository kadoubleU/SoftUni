function arrayManipulator(arr, arrCommands) {
    for (let i = 0; i < arrCommands.length; i++) {
        let content = arrCommands[i].split(" ");
        let command = content[0];

        if (command === "add") {
            let index = Number(content[1]);
            let number = Number(content[2]);
            arr.splice(index, 0, number);
        } else if (command === "addMany") {
            let index = Number(content[1]);
            let elementsToAdd = content.slice(2).map(Number);
            arr.splice(index, 0, ...elementsToAdd);
        } else if (command === "contains") {
            let number = Number(content[1]);
            console.log(arr.indexOf(number));
        } else if (command === "remove") {
            let index = Number(content[1]);
            arr.splice(index, 1);
        } else if (command === "shift") {
            let positions = Number(content[1]) % arr.length;
            arr.push(...arr.splice(0, positions));
        } else if (command === "sumPairs") {
            let sumPairsResult = [];
            for (let j = 0; j < arr.length; j += 2) {
                let currentElement = arr[j] || 0;
                let nextElement = arr[j + 1] || 0;
                sumPairsResult.push(currentElement + nextElement);
            }
            arr = sumPairsResult;
        } else if (command === "print") {
            console.log(`[ ${arr.join(", ")} ]`);
        }
    }
}


  arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains 3", "print"]
  )
;

console.log("-------------");

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
