function theatrePromotion(day, age) {

    let price = 0;

    switch (day) {
        case "Weekday":
            if(age >= 0 && age <= 18) {
                console.log("12$");
            }else if(age > 18 && age <= 64) {
                console.log("18$");
            }else if(age > 64 && age <= 122) {
                console.log("12$");
            }else {
                console.log("Error!");
            }
        break;
        case "Weekend":
            if(age >= 0 && age <= 18) {
                console.log("15$");
            }else if(age > 18 && age <= 64) {
                console.log("20$");
            }else if(age > 64 && age <= 122) {
                console.log("15$");
            }else {
                console.log("Error!");
            }
        break;
        case "Holiday":
            if(age >= 0 && age <= 18) {
                console.log("5$");
            }else if(age > 18 && age <= 64) {
                console.log("12$");
            }else if(age > 64 && age <= 122) {
                console.log("10$");
            }else {
                console.log("Error!");
            }
        break;
    }
}

theatrePromotion('Weekday', 42);
theatrePromotion('Holiday', -12);
theatrePromotion('Holiday', 15);

// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
// Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
// Weekday	12$	18$	12$
// Weekend	15$	20$	15$
// Holiday	5$	12$	10$
// Input
// The input comes in two parameters. The first one will be the type of day (string). The second – the age of the person (number).
// Output
// Print the price of the ticket according to the table, or "Error!" if the age is not in the table.
// Constraints
// •	The age will be in the interval [-1000…1000].
// •	The type of day will always be valid. 
