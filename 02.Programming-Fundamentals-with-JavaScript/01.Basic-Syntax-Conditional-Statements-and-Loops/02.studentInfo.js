function studentInfo(studentName, studentAge, studentGrade) {
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678);
studentInfo('Steve', 16, 2.1426);
studentInfo('Marry', 12, 6.00);

// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format: 
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.
