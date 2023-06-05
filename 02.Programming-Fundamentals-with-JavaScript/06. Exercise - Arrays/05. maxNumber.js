"use strict";

function maxNumber(arr) {

    let newArray = [];
    let arrLength = arr.length;

    let prevValue = Number.MIN_SAFE_INTEGER;
    for(let i = arrLength - 1; i > 0; i--) {
 
        let nextValue = arr[i];
        
        if(nextValue > prevValue) {
            newArray.push(nextValue);
            prevValue = arr[i];
        }
        
    }

    let result = [];

    for(let j = newArray.length - 1; j >= 0; j--) {
        let newArrayValue = newArray[j];

        result.push(newArrayValue);
    }
 
        result = result.join(" ");

    console.log(result);
}

maxNumber([1, 4, 3, 2] );
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);