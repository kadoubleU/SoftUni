function sumSeconds(input) {
    let firstRacerTime = Number(input[0]);
    let secRacerTime = Number(input[1]);
    let thirdRacerTime = Number(input[2]);

    let sumTime = firstRacerTime + secRacerTime + thirdRacerTime;

    let minutes = Math.floor(sumTime / 60);
    let seconds = sumTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["14", "12","10"]);

// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 