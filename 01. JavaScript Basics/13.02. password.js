function password(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;

    while(input[index] !== password) {
        index++;
    }

    if(input[index] === password) {
        console.log(`Welcome ${username}!`);
    }
    
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])

;

// Напишете функция, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход. 
// •	при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
// •	при въвеждане на правилна парола: отпечатваме "Welcome {username}!".
