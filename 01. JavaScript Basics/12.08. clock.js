function clock() {
    let minutes;
    let hours;


    for (hours = 0; hours <= 23; hours++)
    {
        for (minutes = 0; minutes <= 59; minutes++)
        {
           
              console.log(`${hours} : ${minutes}`);
           
        }
     }
   
   
}

clock();

// 9.	Часовник
// Напишете програма, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час} : {минути}". 
// Примерен вход и изход
// Вход	Изход
// (няма вход)	0 : 0
// 0 : 1
// 0 : 2
// 0 : 3
// 0 : 4
// 0 : 5
// 0 : 6
// 0 : 7
// 0 : 8
// 0 : 9
// 0 : 10
// ...
// 23 : 50
// 23 : 51
// 23 : 52
// 23 : 53
// 23 : 54
// 23 : 55
// 23 : 56
// 23 : 57
// 23 : 58
// 23 : 59
// Насоки: потърсете информация за вложени цикли.