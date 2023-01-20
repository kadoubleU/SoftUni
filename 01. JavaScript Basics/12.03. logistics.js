function logistics(input) {
    let loadNumber = Number(input[0]);

    let load;
    let vehicle;
    let totalPrice = 0;
    let totalLoad = 0;
    let vanLoad = 0;
    let truckLoad = 0;
    let trainLoad = 0;
    for(let i = 1; i <= loadNumber; i++) {
        load = Number(input[i]);
        totalLoad += load;
        if(load <= 3) {
            vehicle = "van";
            totalPrice = totalPrice + (load * 200);
            vanLoad = vanLoad + load;
        }else if(load >= 4 && load <= 11) {
            vehicle = "truck";     
            totalPrice = totalPrice + (load * 175);
            truckLoad = truckLoad + load;
        }else if( load >= 12) {
            vehicle = "train";
            totalPrice = totalPrice + (load * 120);
            trainLoad = trainLoad + load;
        }
    }
    
    let middlePrice = (totalPrice / totalLoad).toFixed(2);
    let percentVan = vanLoad / totalLoad * 100;
    let percentTruck = truckLoad / totalLoad * 100;
    let percentTrain = trainLoad / totalLoad * 100;
   
    console.log(middlePrice);
    console.log(`${percentVan.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics([5
    ,2
    ,10
    ,20
    ,1
    ,7
    ]
    );

// Отговаряте за логистиката на различни товари. В зависимост от теглото на товара е нужно различно превозно средство. Цената на тон, за която се превозва товара е различна за всяко превозно средство:
// •	До 3 тона – микробус (200 лева на тон)
// •	От 4 до 11 тона – камион (175 лева на тон)
// •	12 и повече тона – влак (120 лева на тон)
// Вашата задача е да изчислите средната цена на тон превозен товар, както и процента на тоновете  превозвани с всяко превозно средство, спрямо общото тегло(в тонове) на всички товари.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на товарите за превоз – цяло число в интервала [1...1000]
// •	За всеки един товар на отделен ред – тонажа на товара – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 4 реда, както следва:
// •	Първи ред – средната цена на тон превозен товар (закръглена до втория знак след дес. запетая);
// •	Втори ред – процентът тона превозвани с микробус (процент между 0.00% и 100.00%);
// •	Трети ред – процентът  тона превозвани с камион (процент между 0.00% и 100.00%);
// •	Четвърти ред – процентът тона превозвани с влак (процент между 0.00% и 100.00%).
