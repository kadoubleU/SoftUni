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


//SECOND VARIANT

function nElements(input) {
    let step = Number(input[input.length - 1]);
    let array = [];

    for(let i = 0; i < input.length - 1; i += step) {
        
        let num = input[i];

        array.push(num); 
    }

    console.log(array.join(" "));
}