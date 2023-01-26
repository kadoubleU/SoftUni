function coins(input) {
    let specie = Number(input[0]);
    let pennies = Math.round(specie * 100);

    let count = 0;

    while(pennies > 0) {
        if(pennies >= 200) {
            pennies -= 200;
            count++
        }else if(pennies >= 100) {
            pennies -= 100;
            count++;
        }
        else if(pennies >= 50) {
            pennies -= 50;
            count++;
        }
        else if(pennies >= 20) {
            pennies -= 20;
            count++;
        }
        else if(pennies >= 10) {
            pennies -= 10;
            count++;
        }
        else if(pennies >= 5) {
            pennies -= 5;
            count++;
        }else if(pennies >= 2) {
            pennies -= 2;
            count++;
        }else if(pennies >= 1) {
            pennies -= 1;
            count++;
        }

    }

    console.log(count);
}

coins(["2.73"]);

// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 