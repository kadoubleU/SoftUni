function fitnessCenter(input) {
    let peopleNumber = Number(input[0]);

    let activityType = "";

    let backActivityNumber = 0;
    let chestActivityNumber = 0;
    let legsActivityNumber = 0;
    let absActivityNumber = 0;
    let proteinShakeBuyNumber = 0;
    let proteinBarBuyNumber = 0;

    for(let i = 1; i <= peopleNumber; i++) {
        activityType = input[i];

        if(activityType === "Back") {
            backActivityNumber++;
        }else if(activityType === "Chest") {
            chestActivityNumber++;
        }else if(activityType === "Legs") {
            legsActivityNumber++;
        }else if(activityType === "Abs") {
            absActivityNumber++;
        }else if(activityType === "Protein shake") {
            proteinShakeBuyNumber++;
        }else if(activityType === "Protein bar") {
            proteinBarBuyNumber++;
        }
    }

    console.log(`${backActivityNumber} - back`);
    console.log(`${chestActivityNumber} - chest`);
    console.log(`${legsActivityNumber} - legs`);
    console.log(`${absActivityNumber} - abs`);
    console.log(`${proteinShakeBuyNumber} - protein shake`);
    console.log(`${proteinBarBuyNumber} - protein bar`);

    let totalTrainingPeople = ((backActivityNumber + chestActivityNumber + legsActivityNumber + absActivityNumber) / peopleNumber) * 100;

    console.log(`${totalTrainingPeople.toFixed(2)}% - work out`);

    let totalBuyers = ((proteinShakeBuyNumber + proteinBarBuyNumber) / peopleNumber) * 100;

    console.log(`${totalBuyers.toFixed(2)}% - protein`);

}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"]);

// Напишете програма, която да изчислява броя на посетителите в един фитнес център. В началото програмата получава броя на посетителите на фитнеса и за всеки човек - дейността, която извършва във фитнеса. На края програмата трябва да отпечата броят трениращи за всяка една дейност ("Back", "Chest", 'Legs", "Abs") и броят клиенти, закупили продукт ("Protein shake", "Protein bar"). Също така - процентът трениращи (спрямо общия брой посетители) и процентът на клиентите, закупили продукт от фитнеса.
// Вход
// От конзолата се чете число, след това поредица от низове, всяко на отделен ред:
// •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
// •	За всеки един посетител на отделен ред – дейността във фитнеса – текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")
// Изход
// Да се отпечатат на конзолата 8 реда, които съдържат следната информация:
// Ред 1 -	"{брой хора трениращи гръб} - back"
// Ред 2 -	"{брой хора трениращи гърди} - chest"
// Ред 3 -	"{брой хора трениращи крака} - legs"
// Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
// Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
// Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
// Ред 7 -	"{процент на хората дошли да тренират}% - work out"
// Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"
// Всички проценти трябва да са форматирани до втората цифра след десетичния знак.


