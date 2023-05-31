function evenAndOddSubtraction(arr) {

    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < arr.length; i++) {
        let getTheNum = Number(arr[i]);

        if(getTheNum % 2 === 0) {
            evenSum+= getTheNum;
        }else {
            oddSum += getTheNum;
        }

        getTheNum = 0;
    }

    let diff = evenSum - oddSum;

    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9] );
evenAndOddSubtraction([2,4,6,8,10]);