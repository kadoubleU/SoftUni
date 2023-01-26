function examPreparation(input) {
    let index = 0;
    let unsatisfactoryGrades = Number(input[index]);
    index++;

    let taskName;
    let gradeCount = 0;
    let score = 0;
    let unsatisfactoryGradesNumber = 0;

    while(input[index] !== "Enough") {
        
        if(index % 2 == 1) {
            taskName = input[index];
        }else if(index % 2 == 0) {
            score = score + Number(input[index]);
            gradeCount++;

            if(input[index] <= 4.00) {
                unsatisfactoryGradesNumber++;
            }

            if(unsatisfactoryGradesNumber >= unsatisfactoryGrades) {
                console.log(`You need a break, ${unsatisfactoryGradesNumber} poor grades.`);
                return;
            }
         
        }
        
        index++;
        
    }

   let averageScore = score / gradeCount;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCount}`);
    console.log(`Last problem: ${taskName}`);

}

examPreparation(["2",
                "Income",
                "3",
                "Game Info",
                "6",
                "Best Player",
                "4"]);

// Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.
// Вход
// •	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
// •	След това многократно се четат по два реда:
// o	Име на задача - текст (низ)
// o	Оценка - цяло число в интервала [2…6]
// Изход
// •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
// o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
// •	Ако получи определеният брой незадоволителни оценки:
// o	"You need a break, {брой незадоволителни оценки} poor grades."
// Средната оценка да бъде форматирана до втория знак след десетичната запетая. 
