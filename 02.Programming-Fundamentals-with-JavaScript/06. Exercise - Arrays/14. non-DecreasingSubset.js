function nonDecreasingSubset(arr) {
    
    let biggestNum = 0;

    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if(biggestNum <= currentNum) {
            biggestNum = currentNum;

            newArray.push(biggestNum);
        }
    }

    newArray = newArray.join(" ");
    console.log(newArray);

}



nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
