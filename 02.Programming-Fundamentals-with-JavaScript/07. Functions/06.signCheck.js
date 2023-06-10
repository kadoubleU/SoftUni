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
