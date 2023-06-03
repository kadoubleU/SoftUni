function addAndSubtract(arr) {

    let arrLength = arr.length;
    
    let newArray = [];
    
    let oldArraySum = 0;
    let newArraySum = 0;

    for(let index = 0; index < arrLength; index++) {
        let currentNumber = Number(arr[index]);

        oldArraySum += currentNumber;

        if(currentNumber % 2 === 0) {
            currentNumber += index;
        }else {
            currentNumber -= index;
        }

        newArraySum += currentNumber;

        newArray.push(currentNumber);
    }

    console.log(newArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);