function projectsCreation(input) {
    let architectName = input[0];
    let projectsNum = Number(input[1]);

    let totalTime = projectsNum * 3;

    console.log(`The architect ${architectName} will need ${totalTime} hours to complete ${projectsNum} project/s.`);
}

projectsCreation(["George", 4]);