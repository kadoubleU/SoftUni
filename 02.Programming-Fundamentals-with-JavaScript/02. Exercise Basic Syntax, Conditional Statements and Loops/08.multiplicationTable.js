function multiplicationTable(num) {
    let number = Number(num);

    let result = "";

    for(let i = 1; i <= 10; i++) {
        result = `${number} X ${i} = ${number * i}`;

        console.log(result);
    }
}

multiplicationTable(2);


// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.
// Output
// Print every row of the table in the following format:
// {number} X {times} = {product}
// Constraints
// ·	The number will be an integer will be in the interval [1…100]
