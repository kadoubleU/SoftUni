function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = minutes + 15;

    let minutesToHours = Math.floor(totalMinutes / 60);
    let endMinutes = totalMinutes % 60;
    let endHours = hours + minutesToHours;

    if (endHours > 23) {
        let newHours = endHours % 24;

        if (endMinutes < 10) {
            console.log(`${newHours}:0${endMinutes}`);
        }else {
            console.log(`${newHours}:${endMinutes}`);
        }
    }
    else {
        if (endMinutes < 10) {
            console.log(`${endHours}:0${endMinutes}`);
        }else {
            console.log(`${endHours}:${endMinutes}`);
        }
    }

}

timeMinutes(["12", "49"]);

// Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 