function negativeOrPositiveNumbers(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let getElement = Number(arr[i]);

        if(getElement < 0) {
            newArr.unshift(getElement);
        }else {
            newArr.push(getElement);
        }
    }

    newArr = newArr.join("\n");

    return newArr;
}

console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));
console.log("------------");
console.log(negativeOrPositiveNumbers(['3', '-2', '0', '-1']));


//SECOND VARIANT

function negativePositiveNumbers(input) {
    let newArray = [];
    for(let index = 0; index < input.length; index++) {
        let number = Number(input[index]);

        if(number < 0) {
            newArray.unshift(number);
        }else {
            newArray.push(number);
        }
    }

    let arrayToString = newArray.join("\n");

    return arrayToString;
}

console.log(negativePositiveNumbers(['7', '-2', '8', '9']));
console.log("-----------");
console.log(negativePositiveNumbers(['3', '-2', '0', '-1']));