function grades(input) {
    let studentNumber = Number(input[0]);

    let grade;
    let weakTwo = 0;
    let middleThree = 0;
    let goodFour = 0;
    let fiveMore = 0;

    let studentWeakTwo = 0;
    let studentMiddleThree = 0;
    let studentGoodFour = 0;
    let studentFiveMore = 0;

    let totalScore = 0;

    for(let i = 1; i <= studentNumber; i++) {
        grade = Number(input[i]);
        totalScore = totalScore + grade;
        if(grade >= 2.00 && grade <= 2.99) { 
            studentWeakTwo++;
            weakTwo = (studentWeakTwo / studentNumber * 100);
        }else if(grade >= 3.00 && grade <= 3.99) {
            studentMiddleThree++;
            middleThree = studentMiddleThree / studentNumber * 100;
        }else if(grade >= 4.00 && grade <= 4.99) {
            studentGoodFour++;
            goodFour = studentGoodFour / studentNumber * 100;
        }else if(grade >= 5.00) {
            studentFiveMore++;
            fiveMore = studentFiveMore / studentNumber * 100;
        }
        
    }
    console.log(`Top students: ${fiveMore.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodFour.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${middleThree.toFixed(2)}%`);
    console.log(`Fail: ${weakTwo.toFixed(2)}%`);

let middleScore = totalScore / studentNumber;
    console.log(`Average: ${middleScore.toFixed(2)}`);

}

grades([6, 2, 3, 4, 5, 6, 2.2]);

// Оценки
// Напишете програма, която да пресмята статистика на оценки от изпит. В началото програмата получава броят на студентите явили се на изпита и за всеки студент неговата оценка. На края програмата трябва да изпечата процента на студенти с оценка между 2.00 и 2.99, между 3.00 и 3.99, между 4.00 и 4.99, 5.00 или повече. Също така и средният успех на изпита.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
// •	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
// Изход
// Да се отпечатат на конзолата 5 реда, които съдържат следната информация:
// Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
// Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
// Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
// Ред 4 -	"Fail: {по-малко от 3.00}%"
// Ред 5 -	"Average: {среден успех}"
// Всички числа трябва да са форматирани до вторият знак след десетичната запетая.
