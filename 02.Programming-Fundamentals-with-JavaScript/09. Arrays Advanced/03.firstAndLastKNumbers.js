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


//SECOND VARIANT

function firstLastKElements(array) {
    let kElements = array.shift();
  
    let slicedArrayBegining = array.slice(0, kElements).join(" ");
    let slicedArrayEnd = array.slice(-kElements).join(" ");
  
    return `${slicedArrayBegining}\n${slicedArrayEnd}`;
  }
  
  console.log(firstLastKElements([2, 7, 8, 9]));
  console.log(firstLastKElements([3, 6, 7, 8, 9]));
  