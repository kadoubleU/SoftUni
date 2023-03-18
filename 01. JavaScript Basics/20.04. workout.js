function workout(input) {
    let trainingDaysNumber = Number(input[0]);
    let firstDayKm = Number(input[1]);

    let index = 2;
    let percent = 0;

    let km = 0;

    let sum = firstDayKm;

    let totalKm = 0;

    while(index <= input.length) {
        percent = input[index];

        sum = sum + km;
        totalKm += sum;
        km = 0;
        km = sum * (percent / 100);



        index++;
    }

    if(totalKm >= 1000) {
        let moreKm = totalKm - 1000;
        console.log(`You've done a great job running ${Math.ceil(moreKm)} more kilometers!`);
    }else {
        let neededKm = Math.ceil(1000 - totalKm);
        console.log(`Sorry Mrs. Ivanova, you need to run ${neededKm} more kilometers`);
    }
}

workout(["4",
"100",
"30",
"50",
"60",
"80"])
;