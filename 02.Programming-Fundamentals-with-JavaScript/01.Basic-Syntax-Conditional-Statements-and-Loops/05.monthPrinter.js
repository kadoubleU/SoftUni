function monthPrinter(num) {
    let monthNum = num;

    if(monthNum === 1) {
        console.log("January");
    }else if(monthNum === 2) {
        console.log("February");
    }else if(monthNum === 3) {
        console.log("March");
    }else if(monthNum === 4) {
        console.log("April");
    }else if(monthNum === 5) {
        console.log("May");
    }else if(monthNum === 6) {
        console.log("June");
    }else if(monthNum === 7) {
        console.log("July");
    }else if(monthNum === 8) {
        console.log("August");
    }else if(monthNum === 9) {
        console.log("September");
    }else if(monthNum === 10) {
        console.log("October");
    }else if(monthNum === 11) {
        console.log("November");
    }else if(monthNum === 12) {
        console.log("December");
    }else {
        console.log("Error!");
    }
}

monthPrinter(2);

// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"
