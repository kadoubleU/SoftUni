function bonusScore(input) {
    let startScore = Number(input[0]);
    let bonus;
    let totalScore;

    if (startScore <= 100) {
        bonus = 5;
        totalScore = startScore + bonus;
    }else if (startScore > 100 && startScore < 1000) {
        bonus = startScore * (20/100);
        totalScore = startScore + bonus;
    }else if (startScore > 1000){
        bonus = startScore * (10/100);  
        totalScore = startScore + bonus;   
    }

    if (startScore % 2 === 0) {
        bonus = bonus + 1;
        totalScore = startScore + bonus;
    }else if (startScore % 10 === 5) {
        bonus = bonus + 2;
        totalScore = startScore + bonus;
    }
    
    console.log(bonus);
    console.log(totalScore);
}
bonusScore(["1500"]);


// Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата, описани по-долу. Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки (числото + бонуса).
// •	Ако числото е до 100 включително, бонус точките са 5.
// •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
// •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// •	Допълнителни бонус точки (начисляват се отделно от предходните):
// o	За четно число  + 1 т.
// o	За число, което завършва на 5  + 2 т.
