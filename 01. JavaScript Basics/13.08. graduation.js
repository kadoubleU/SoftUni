function graduation(input) {
    let name = input[0];

    let index = 1;

    let rating = 0;

    let totalScore = 0;
    let lowGrade = 0;

    while(index <= input.length) {
        rating = Number(input[index]);
        
        if(rating >= 4.00) {
            totalScore = totalScore + rating;

        }else if(rating < 4.00) {
           
            lowGrade++;
            
            if(lowGrade >= 2) {
                break;
            }
            continue;
        }
    
        index++;

    }

    let averageScore = totalScore / 12;

    if(index < 12) {
        console.log(`${name} has been excluded at ${index} grade`);
    }else {
        console.log(`${name} graduated. Average grade: ${averageScore.toFixed(2)}`);
    }

}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;

// Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
//  При успешно завършване на 12-ти клас да се отпечата : 
// "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
// В случай, че ученикът е изключен от училище, да се отпечата:
// "{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
// Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 
