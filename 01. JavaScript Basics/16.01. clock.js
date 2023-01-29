function clock() {

    for(let hours = 0; hours < 24; hours++){
        for (let minutes = 0; minutes < 60; minutes++) {
            
            console.log(`${hours}:${minutes}`);
            
        }
    }
}

clock();

// Часовник 
// Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}".
