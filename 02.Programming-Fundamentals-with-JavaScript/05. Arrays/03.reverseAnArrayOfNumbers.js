function arrayOfNumbers(num, arr) {
  let newArray = [];
  let lastArray = [];

  for (let i = 0; i < num; i++) {
    newArray.push(arr[i]);
  }

  for (let k = 0; k <= num - 1; k++) {
    lastArray.unshift(newArray[k]);
  }

  let newString = lastArray.join(" ");
  
  console.log(newString);
}

arrayOfNumbers(3, [10, 20, 30, 40, 50]);
arrayOfNumbers(4, [-1, 20, 99, 5]);
arrayOfNumbers(2, [66, 43, 75, 89, 47]);
