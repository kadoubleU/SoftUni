function softUniReception(input) {
    let studentCount = Number(input[3]);
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);

    let answeredStudentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let neededTime = 0;

    while(studentCount > 0) {
        studentCount -= answeredStudentsPerHour;
        neededTime++;

        if(neededTime % 4 === 0) {
            neededTime++;
        }
    }

    console.log(`Time needed: ${neededTime}h.`);
}

softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);