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