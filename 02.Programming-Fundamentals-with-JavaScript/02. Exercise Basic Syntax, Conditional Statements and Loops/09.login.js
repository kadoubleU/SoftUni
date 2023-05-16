function login(input) {
    let index = 0;

    let word = "";
    let username = "";

    while(index < input.length) {
        
        word = input[index+1];

        username = input[0];

        let splitString = word.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        
        if(joinArray === username) {
            console.log(`User ${username} logged in.`);
            break;
        }
        
        if(index === 3) {
            console.log(`User ${username} blocked!`);
            break;
        }

        index++;

        if (joinArray !== username) {
            console.log("Incorrect password. Try again.");
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);


// You will be given a string representing a username. The correct password will be that username reversed. Until you
// receive the correct password print on the console: "Incorrect password. Try again.". When you receive the
// correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the
// program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a
// password.