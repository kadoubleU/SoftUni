function walking(input) {
    let index = 0;

    let steps = 0;
    let totalSteps = 0;
    while(index < input.length) {
        steps = Number(input[index]);

        if(input[index] !== "Going home") {
            totalSteps = totalSteps + steps;
        }else  if(input[index] === "Going home") {
            totalSteps = totalSteps + Number(input[index+1]);
            break;
        }

        index++;
        
    }
    if(totalSteps >= 10000){
        console.log(`Goal reached! Good job!`);
        let stepsDiff = totalSteps - 10000;
        console.log(`${stepsDiff} steps over the goal!`);
    }else {
        let neededSteps = 10000 - totalSteps;
        console.log(`${neededSteps} more steps to reach goal.`);
    }
    
}

walking(["125",
        "250",
        "4000",
        "30",
        "2678",
        "4682"]);


// Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!" и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."
