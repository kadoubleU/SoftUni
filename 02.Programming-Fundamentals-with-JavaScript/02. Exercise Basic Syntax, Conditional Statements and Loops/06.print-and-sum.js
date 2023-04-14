function printAndSum(num1, num2) {
    let startNumber = Number(num1);
    let endNumber = Number(num2);

    let numberRow = "";
    let sum = 0;

    for(let i = startNumber; i <= endNumber; i++) {
        if (i === endNumber) {
            numberRow += i;
            sum += i;
            break;
        }
        numberRow += `${i} `;
        
        sum += i;
    }
    console.log(numberRow);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);

// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:

// Examples
// Input	Output
// 5, 10	5 6 7 8 9 10
//          Sum: 45
// 0, 26	0 1 2 … 26
//          Sum: 351
// 50, 60	50 51 52 53 54 55 56 57 58 59 60
//          Sum: 605
