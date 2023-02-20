function fitnessCard(input) {
    let availableAmount = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    let price = 0;

    if(sex === "m") {
        if(sportType === "Gym") {
            price = 42;
        }else if(sportType === "Boxing") {
            price = 41;
        }else if(sportType === "Yoga") {
            price = 45;
        }else if(sportType === "Zumba") {
            price = 34;
        }else if(sportType === "Dances") {
            price = 51;
        }else if(sportType === "Pilates") {
            price = 39;
        }

    }else if(sex === "f") {
        if(sportType === "Gym") {
            price = 35;
        }else if(sportType === "Boxing") {
            price = 37;
        }else if(sportType === "Yoga") {
            price = 42;
        }else if(sportType === "Zumba") {
            price = 31;
        }else if(sportType === "Dances") {
            price = 53;
        }else if(sportType === "Pilates") {
            price = 37;
        }
    }

    if(age <= 19) {
        price = price - (price * (20 / 100));
    }

    if(availableAmount >= price) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    }else {
        let neededMoney = price - availableAmount;
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`);
    }

}

fitnessCard(["10",
"m",
"50",
"Pilates"]);

// Да се напише програма, която проверява дали първоначално налична сума е достатъчна, за да се заплати карта за месечен достъп във фитнес.
// Цената на картата зависи от пола на клиента и спорта, който практикува:
// Пол	Gym	Boxing	Yoga	Zumba	Dances	Pilates
// мъж	$42	$41	$45	$34	$51	$39
// жена	$35	$37	$42	$31	$53	$37

// Всички цени на карти за ученици (възраст под 19 години вкл.) са с 20% намаление.
// Вход
// От конзолата се прочитат 4 реда:
// •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
// •	Пол - символ ('m' за мъж и 'f' за жена)
// •	Възраст - цяло число в интервала [5…105]
// •	Спорт - текст (една от възможностите в таблицата)
// Изход
// На конзолата се отпечатва 1 ред:
// •	Ако сумата е достатъчна:
// "You purchased a 1 month pass for {sport}."
// където {sport} е въведения тип спорт
// •	Ако сумата не е достатъчна трябва да се пресметне колко още пари са необходими, за да се закупи карта:
// "You don't have enough money! You need ${money} more."
// където {money} e оставащата сума нужна, за да се закупи картата, форматирана до втория знак след десетичната запетая.
