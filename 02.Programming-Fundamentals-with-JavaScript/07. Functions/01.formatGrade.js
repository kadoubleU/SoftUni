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


//SECOND VARIANT

function formatGrade(grade) {

  let result = "";

  if(grade < 3) {
      result = "Fail";
      grade = 2;
  }else if(grade < 3.50) {
      result = "Poor";
  }else if(grade < 4.50) {
      result = "Good";
  }else if(grade < 5.50) {
      result = "Very good";
  }else if( grade <= 6.00) {
      result = "Excellent";
  }

  let output = "";

  if(grade < 3) {
      output = `${result} (${grade})`;
  }else {
      output = `${result} (${grade.toFixed(2)})`;
  }

  return output;

}

let formatGradeFunction = formatGrade(3.33);
console.log(formatGradeFunction);
formatGradeFunction = formatGrade(4.50);
console.log(formatGradeFunction);
formatGradeFunction = formatGrade(2.99);
console.log(formatGradeFunction);

