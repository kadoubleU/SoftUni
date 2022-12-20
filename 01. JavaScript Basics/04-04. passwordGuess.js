function passwordGuess(input) {
    let password = input[0];

    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!p@ss"]);

// Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 