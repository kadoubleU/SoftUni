function mergeArrays(array1, array2) {
  let thirdArray = [];
  let sum = 0;
  let concatenationOfNumbers = "";

  for (let i = 0; i < array1.length; i++) {
    let firstArrayNumber = Number(array1[i]);

    let secondArrayNumber = Number(array2[i]);

    if (i % 2 === 0) {
      sum = firstArrayNumber + secondArrayNumber;
      thirdArray.push(sum);
    } else {
      concatenationOfNumbers = "" + firstArrayNumber + secondArrayNumber;
      thirdArray.push(concatenationOfNumbers);
      
    }
  }

  let result = thirdArray.join(" - ");

  console.log(result);
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

console.log("-------------");

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
