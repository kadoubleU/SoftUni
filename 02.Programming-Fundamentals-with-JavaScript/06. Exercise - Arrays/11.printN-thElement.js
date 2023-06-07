function printNthElement(arr) {
    let lastElement = Number(arr[arr.length - 1]);

    let newArray = "";

    for(let i = 0; i < arr.length - 1; i++) {
        let getIndexValue = arr[i];

        newArray += getIndexValue + " ";

        i += lastElement - 1;
        
    }
        
    console.log(newArray);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);