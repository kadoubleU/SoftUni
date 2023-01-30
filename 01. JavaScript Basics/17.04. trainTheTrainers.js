function trainTheTrainers(input) {
    let index = 0;

    let judgeNumber = Number(input[index]);
    index++;

    let grade = 0;
    let presentationScore = 0;
    let averageScore = 0;

    let counter = 0;

    let presentationName = input[index];
    while (presentationName === input[index] && presentationName !== "Finish") {
        index++;

        for (let i = 1; i <= judgeNumber; i++) {
            grade += Number(input[index]);
            counter++;

            presentationScore += Number(input[index]);
            averageScore = presentationScore / judgeNumber;

            index++;
        }

        console.log(`${presentationName} - ${averageScore.toFixed(2)}.`);

        presentationScore = 0;
        averageScore = 0;

        presentationName = input[index];
        continue;
    }

    index++;

    let finalScore = grade / counter;
    console.log(`Student's final assessment is ${finalScore.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])

    ;

// Курсът "Train the trainers" е към края си и финалното оценяване наближава. Вашата задача е да помогнете на журито,  което ще оценява презентациите, като напишете функция,  която да изчислява средната оценка от представянето на всяка една презентация от даден студент, а накрая средният успех от всички тях.
// От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]
// След това името на презентацията - текст
// За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]
// След изчисляване на средната оценка за конкретна презентация, на конзолата се печата
//  "{името на презентацията} - {средна оценка}."
// След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}." и програмата приключва.
// Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.
