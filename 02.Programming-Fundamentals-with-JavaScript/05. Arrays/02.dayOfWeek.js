function dayOfWeek(n) {

    let week = ["Invalid day!", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = week[n];

    if(n > 0 && n <= 7) {
        console.log(day);
    }else {
        console.log("Invalid day!");
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);