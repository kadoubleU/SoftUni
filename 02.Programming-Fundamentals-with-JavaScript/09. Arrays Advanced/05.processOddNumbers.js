function processOddNumbers(arr) {
    
    let oddNum = 0;

    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            oddNum = Number(arr[i]);
            oddNum *= 2;

            newArr.push(oddNum);
        }
    }

    newArr = newArr.reverse();

    console.log(newArr.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);