function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);

  console.log(arr[0], arr[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

//SECOND VARIANT

function smallestTwoNumbers(data) {
  let newArr = data.sort((a, b) => a - b);
  return newArr[0] + " " + newArr[1];
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
