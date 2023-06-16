function firstAndLastKNumbers(arr) {
    let k = Number(arr[0]);

    let newArr = [];

    for(let i = 1; i <= k; i++) {
        let firstElements = Number(arr[i]);

        newArr.push(firstElements);
    }

    arr = arr.slice(-k);
    arr = arr.join(" ");
    newArr = newArr.join(" ");
    console.log(newArr);
    console.log(arr);
}

firstAndLastKNumbers([2, 7, 8, 9]);
console.log("------------");
firstAndLastKNumbers([3, 6, 7, 8, 9]);