function bonusScoringSystem(input) {
  let numberOfStudents = Number(input.shift());
  let lecturesNumber = Number(input.shift());
  let additionalBonus = Number(input.shift());

  let totalBonus = 0;
  let maxBonus = 0;
  let studentLectures = 0;

  for (let index = 0; index < numberOfStudents; index++) {
    let studentAttendances = Number(input[index]);

    totalBonus = (studentAttendances / lecturesNumber) * (5 + additionalBonus);

    if (maxBonus < totalBonus) {
      maxBonus = totalBonus;
      studentLectures = studentAttendances;
    }
  }

  return `Max Bonus: ${Math.ceil(
    maxBonus
  )}.\nThe student has attended ${studentLectures} lectures.`;
}

console.log(
  bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"])
);

console.log(
  bonusScoringSystem([
    "10",
    "30",
    "14",
    "8",
    "23",
    "27",
    "28",
    "15",
    "17",
    "25",
    "26",
    "5",
    "18",
  ])
);
