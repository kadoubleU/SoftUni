function sequence(input) {
    let n = Number(input[0]);

    index = 1;
    let sum = 1;
    while(index <= n) {
        
        if(index % 2 !== 0) {
            
            if(sum <= n) {
                console.log(sum);
                sum = (sum * 2) + 1;
            }
            
        }
        
        index++;
    }
    
}

sequence(["7"]);

// Напишете програма, която чете число n, въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.
// Примерен вход и изход
// вход	изход		вход	изход		вход	изход		вход	изход
// (["3"])	1
// 3		(["8"])	1
// 3
// 7		(["17"])	1
// 3
// 7
// 15		(["31"])	1
// 3
// 7
// 15
// 31
// Насоки

// 1.	Създайте променлива, която ще е брояч и има първоначална стойност 1.
// 2.	Създайте while цикъл, който се повтаря докато брояча е по-малък от числото, което сте прочели от конзолата.
// 3.	При всяко повторение на цикъла принтирайте стойността на брояча и му прибавяйте дадената стойност.
