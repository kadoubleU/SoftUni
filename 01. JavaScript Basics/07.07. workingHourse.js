function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    switch (day) {
        case "Monday": ;
        case "Tuesday": ;
        case "Wednesday": ;
        case "Thursday": ;
        case "Friday": ;
        case "Saturday":
            if(hour >= 10 && hour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
        break;   
        default:
            console.log("closed");
        break;
    }
}

workingHours(["11","Sunday"]);

// Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.