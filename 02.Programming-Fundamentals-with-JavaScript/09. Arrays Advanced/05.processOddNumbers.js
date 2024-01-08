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



//SECOND VARIANT

function processAddNumbers(data) {
    let newArr = [];

    newArr = data.filter((x, y) => y % 2 !== 0);
    newArr = newArr.map(x => x * 2);
    newArr = newArr.reverse()
    
    return newArr.join(" ");
}

console.log(processAddNumbers([10, 15, 20, 25]));
console.log(processAddNumbers([3, 0, 10, 4, 7, 3]));


//THIRD VARIANT

function processAddNumbers(data) {
    let newArr = [];
  
    newArr = data
      .filter((x, y) => y % 2 !== 0)
      .map((x) => x * 2)
      .reverse()
      .join(" ");
  
    return newArr;
  }
  
  console.log(processAddNumbers([10, 15, 20, 25]));
  console.log(processAddNumbers([3, 0, 10, 4, 7, 3]));
  