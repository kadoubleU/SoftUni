function sumPrimeNonPrime(input) {
    index = 0;
    number = Number.MIN_SAFE_INTEGER;
    primeNumbers = 0;
    nonPrimeNumbers = 0;

        for (let i = 0; i < input.length-1; i++) {
            if(input[i] === "stop") {
                break;
            }
            
            number = Number(input[i]);

            let isPrime = true;

            if(number < 0) {
                console.log("Number is negative.");

                continue;
            }

            for(let currentDivider = 2; currentDivider < number; currentDivider++) {
                if(number % currentDivider === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime === true) {
                primeNumbers += Number(number);
                
            }else {
                nonPrimeNumbers += Number(number);
            }
            
        }

    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);
    
}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"]);


// Напишете функция, която получава масив с цели  числа в диапазона от -2,147,483,648 до 2,147,483,647, докато не се получи команда "stop". Да се намери сумата на всички въведени прости и сумата на всички въведени непрости числа. Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости, ако на входа се подаде отрицателно число да се изведе следното съобщение "Number is negative.". В този случай въведено число се игнорира и не се прибавя към нито една от двете суми, а програмата продължава своето изпълнение, очаквайки въвеждане на следващо число. 
// На изхода да се отпечатат на два реда двете намерени суми в следния формат:
// "Sum of all prime numbers is: {prime numbers sum}"
// "Sum of all non prime numbers is: {nonprime numbers sum}"
