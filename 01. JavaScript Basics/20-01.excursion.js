function excursion(input) {
    let peopleNumber = Number(input[0]);

    let nightsNumber = Number(input[1]);
    let transportCardsNumber = Number(input[2]);
    let museumTicketsNumber = Number(input[3]);

    let nightsPrice = nightsNumber * 20;
    let transportCardsPrice = transportCardsNumber * 1.60;
    let museumTicketsPrice = museumTicketsNumber * 6;

    let totalPrice = nightsPrice + transportCardsPrice + museumTicketsPrice;

    let sum = peopleNumber * totalPrice;

    sum = sum + (sum * (25 /100));

    console.log(sum.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"])
;