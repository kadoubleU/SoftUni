function rounding(param1, param2) {
    let numToBeRounded = Number(param1);
    let decimalPlaces = Number(param2);

    if(decimalPlaces > 15) {
        decimalPlaces = 15;
    }

    let roundedNum = numToBeRounded.toFixed(decimalPlaces);

    let endResult = parseFloat(roundedNum);

    console.log(endResult);

}

rounding(10.5,3);







// Write a JS function that rounds numbers to a specific precision.
// The input comes as two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If the passed precision is more than 15, it should automatically be reduced to 15.
// Remove trailing zeroes, if any (you can use parseFloat (number))
// The output should be printed to the console. Do not print insignificant decimals.
