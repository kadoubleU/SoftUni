function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let totalExamMinutes = (examHour * 60) + examMinutes;
    let totalArriveMinutes = (arriveHour * 60) + arriveMinutes;

    let leftMinutes = totalExamMinutes - totalArriveMinutes;

    if(leftMinutes < 0) {
    console.log("Late");
        let lateMinutes = Math.abs(leftMinutes);
        if(lateMinutes < 60){
            console.log(`${lateMinutes} minutes after the start`);
        }else if(lateMinutes >= 60){
            let hours = Math.floor(lateMinutes / 60);
            let minutes = lateMinutes % 60;
            
            if(minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            }else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }else if(leftMinutes >= 0 && leftMinutes <= 30) {
        console.log("On time");

        if(leftMinutes <= 1) {

            if(leftMinutes == 0) {
                
            }else {
                console.log(`${leftMinutes} minutes before the start`);
            }
            
        }else {
            console.log(`${leftMinutes} minutes before the start`);
        }
    }else if(leftMinutes > 30) {
        console.log('Early');

            let hours = Math.floor(leftMinutes / 60);
            let minutes = leftMinutes % 60;

        if(leftMinutes >= 60) {

            if(minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            }else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }else {
            console.log(`${leftMinutes} minutes before the start`)
        }
    }
}

onTimeForExam(["11","30","12","29"]);

// Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа или минути е подранил или закъснял.
// Вход
// Приемат се 4 аргумента:
// •	Първият съдържа час на изпита – цяло число от 0 до 23.
// •	Вторият съдържа минута на изпита – цяло число от 0 до 59.
// •	Третият съдържа час на пристигане – цяло число от 0 до 23.
// •	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
// Изход
// На първият ред отпечатайте:
// •	"Late", ако студентът пристига по-късно от часа на изпита.
// •	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// •	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
// Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
// •	"mm minutes before the start" за идване по-рано с по-малко от 1. - OK
// •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05" - 
// •	 "mm minutes after the start" за закъснение под час. - OK
// •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03" - OK
