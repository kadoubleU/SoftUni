function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);

    let toFahrenheit = (celsius * 1.8) + 32;

    console.log(toFahrenheit.toFixed(2));
}

celsiusToFahrenheit(["32.3"]);

// Конзолен конвертор: от градуси °C към градуси °F
// Напишете програма, която чете градуси по скалата на Целзий (°C) и ги преобразува до градуси по скалата на Фаренхайт (°F). Потърсете в Интернет подходяща формула, с която да извършите изчисленията. Форматирате изхода до втория знак след десетичната запетая. 