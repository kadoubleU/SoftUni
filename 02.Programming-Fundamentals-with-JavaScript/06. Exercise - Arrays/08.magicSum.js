function magicSum(arr, num) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let prevNumber = Number(arr[i]);

    for (let j = 1; j < arr.length; j++) {
      let nextNumber = arr[j + i];

      let sum = prevNumber + nextNumber;

      if (sum === num) {
        newArray.push(prevNumber);
        newArray.push(nextNumber);
        newArray = newArray.join(" ");
        console.log(newArray);
      }

      sum = 0;
      newArray = [];
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("---------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("---------");
magicSum([1, 2, 3, 4, 5, 6], 6);
