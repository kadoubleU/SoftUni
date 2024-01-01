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



//SECOND VARIANT

function maxNumber(input) {
    let newArray = [];
    let minNumber = Number.MIN_SAFE_INTEGER;
    let maxNumber = Math.max(...input);
    let isTrue = false;
  
    for (let i = 0; i <= input.length; i++) {
      let prevNumber = Number(input[i]);
      let index = i;
      let nextNumber = Number(input[index + 1]);
  
      if(prevNumber > nextNumber) {
          
          if(prevNumber >= maxNumber) {
              break;
          }
      
          break;
      }else {
          isTrue = true;
      }
  
    }
  
    if(isTrue) {
      for (let j = 0; j <= input.length; j++) {
          let prevNumber = Number(input[j]);
          let index = j;
          let nextNumber = Number(input[index + 1]);
      
          if(prevNumber > nextNumber) {
              minNumber = prevNumber;
  
              if(minNumber > nextNumber) {
                  newArray.push(minNumber);
              }
          }
      }
    }
    
  
    newArray.push(Number(input[input.length - 1]));
  
    console.log(newArray.join(" "));
  }
  
  maxNumber([41, 41, 34, 20]);
  