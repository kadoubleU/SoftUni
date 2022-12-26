function numberInRange(input) {
    let number = Number(input[0]);

    if(number >= -100 && number <= 100 && number != 0) {
        console.log("Yes")
    }else {
        console.log("No");
    }
}

numberInRange(["25"]);

// Да се напише функция, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", ако отговаря на условията, или "No" ако е извън тях.