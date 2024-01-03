function signCheck(numOne, numTwo, numThree) {
  let result = "";

  if (
    (numOne > 0 && numTwo > 0 && numThree > 0) ||
    (numOne > 0 && numTwo > 0 && numThree > 0) ||
    (numOne > 0 && numTwo > 0 && numThree > 0) ||
    (numOne < 0 && numTwo < 0 && numThree > 0) ||
    (numOne > 0 && numTwo < 0 && numThree < 0) ||
    (numOne < 0 && numTwo > 0 && numThree < 0)
  ) {
    result = "Positive";
  } else {
    result = "Negative";
  }

  return result;
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));


//SECOND VARIANT

function signCheck(numOne, numTwo, numThree) {
  let result = "";

  let numOneResult = (numOne > numOne * -1);
  let numTwoResult = (numTwo > numTwo * -1);
  let numThreeResult = (numThree > numThree * -1);
  let negtivesNums = (numOne < 0 && numTwo < 0 && numThree < 0);
  if (
    (numOneResult && numTwoResult) ||
    (numOneResult && numThreeResult) ||
    (numTwoResult && numThreeResult) ||
    (negtivesNums)
  ) {
    result = "Negative";
  } else {
    result = "Positive";
  }

  return result;
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
