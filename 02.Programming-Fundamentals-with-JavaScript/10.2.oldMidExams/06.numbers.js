function numbers(input) {
    let toArray = input.split(" ").map(Number);

    let sum = 0;
    let numberNumbers = 0;
    for(let i = 0; i < toArray.length; i++) {
        let number = toArray[i];
        numberNumbers++;
        sum += number;
    }

    let averageNumber = Number((sum / numberNumbers).toFixed(2));

    let greaterNums = [];

    for(let j = 0; j < toArray.length; j++) {
        let num = toArray[j];

        if(num > averageNumber) {
            greaterNums.push(num);
        }
        
    }

    greaterNums = greaterNums.sort((a, b) => b - a).splice(0, 5);

    if(greaterNums.length > 0) {
        return greaterNums.join(" ");
    }else {
        return "No";
    }
}

console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(numbers('1'));
console.log(numbers('-1 -2 -3 -4 -5 -6'));