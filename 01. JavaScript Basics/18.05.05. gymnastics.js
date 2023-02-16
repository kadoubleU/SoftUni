function gymnastics(input) {
    let country = input[0];
    let appliance = input[1];

    let difficultyPoints = 0;
    let performancePoints = 0;

    if(country === "Russia") {
        if(appliance === "ribbon") {
            difficultyPoints = 9.100;
            performancePoints = 9.400;
            
        }else if(appliance === "hoop") {
            difficultyPoints = 9.300;
            performancePoints = 9.800;

        }else if(appliance === "rope") {
            difficultyPoints = 9.600;
            performancePoints = 9.000;

        }
    
    }else if(country === "Bulgaria") {
        if(appliance === "ribbon") {
            difficultyPoints = 9.600;
            performancePoints = 9.400;
            
        }else if(appliance === "hoop") {
            difficultyPoints = 9.550;
            performancePoints = 9.750;

        }else if(appliance === "rope") {
            difficultyPoints = 9.500;
            performancePoints = 9.400;

        }
    }else if(country === "Italy") {
        if(appliance === "ribbon") {
            difficultyPoints = 9.200;
            performancePoints = 9.500;
            
        }else if(appliance === "hoop") {
            difficultyPoints = 9.450;
            performancePoints = 9.350;

        }else if(appliance === "rope") {
            difficultyPoints = 9.700;
            performancePoints = 9.150;
        }
    }

    let totalPoints = difficultyPoints + performancePoints;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${appliance}.`);

    let neededPoints = ((20 - totalPoints) / 20) * 100;
    console.log(`${neededPoints.toFixed(2)}%`);

}

gymnastics(["Italy",
"hoop"]);

// На световно първенство по художествена гимнастика три от държавите се изявяват като лидери в класирането (Русия, България, Италия). Вашата задача е да изчислите каква е оценката дадена от журито за конкретно съчетание, като знаете държавата, която е играла и с кой уред е играла - лента, обръч или въже. За съчетанието си, отбора е получил две оценки: оценка за трудност и оценка за изпълнение на съчетанието, като крайната оценка е сбор на двете оценки. В таблицата са показани какви оценки за трудност и изпълнение са получили ансамблите за всеки един уред.
// Уред	Русия	България	Италия
// Лента(ribbon)	Трудност: 9.100
// Изпълнение: 9.400	Трудност: 9.600
// Изпълнение: 9.400	Трудност: 9.200
// Изпълнение: 9.500
// Обръч(hoop)	Трудност: 9.300
// Изпълнение: 9.800	Трудност: 9.550
// Изпълнение: 9.750	Трудност: 9.450
// Изпълнение: 9.350
// Въже(rope)	Трудност: 9.600
// Изпълнение: 9.000	Трудност: 9.500
// Изпълнение: 9.400	Трудност: 9.700
// Изпълнение: 9.150
// Напишете програма, която изчислява каква е оценката на дадена държава за определен уред и колко процента не им достигат, за да имат максималната оценка, която е 20.
// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
// •	Втори ред – уред - текст ("ribbon", "hoop" или "rope")
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Първи ред: "The team of {държава} get {обща оценка} on {уред}."
// •	Втори ред:  "{процентът, който не им достига до максималния брой точки}%"
// Общата оценка да бъде форматирана до третата цифра след десетичния знак, а процентът да бъде форматиран до втората цифра след десетичния знак.
