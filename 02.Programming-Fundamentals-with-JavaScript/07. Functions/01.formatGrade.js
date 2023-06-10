function formatGrade(grade) {
  grade = Number(grade);

  let result = "";

  if (grade < 3) {
    result = "Fail (2)";
  } else if (grade >= 3.00 && grade < 3.50) {
    result = `Poor (${grade.toFixed(2)})`;
  } else if (grade >= 3.50 && grade < 4.50) {
    result = `Good (${grade.toFixed(2)})`;
  } else if (grade >= 4.50 && grade < 5.50) {
    result = `Very good (${grade.toFixed(2)})`;
  } else if (grade >= 5.5 && grade <= 6) {
    result = `Excellent (${grade.toFixed(2)})`;
  }

  return result;

}

console.log(formatGrade(3.33));
console.log(formatGrade(4.5));
console.log(formatGrade(5.5));
