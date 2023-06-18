function taxCalculator(arr) {

    let vehicleInfo;

    for(el of arr) {
        vehicleInfo = el.split(">>");
    }

    let collectedMoney = 0;

    for(let i = 0; i < vehicleInfo.length; i++) {
        let vehicle = vehicleInfo[i];

        vehicle = vehicle.split(" ");
        
        let vehicleType = vehicle[0];
        let yearsTax = Number(vehicle[1]);
        let traveledKm = Number(vehicle[2]);


        let totalTaxes = 0;
        

        if(vehicleType === "family") {

            totalTaxes = ((Math.floor(traveledKm / 3000)) * 12) + (50 - yearsTax * 5);

            
            console.log(`A ${vehicleType} car will pay ${totalTaxes.toFixed(2)} euros in taxes.`);

            collectedMoney += totalTaxes;

        }else if(vehicleType === "heavyDuty") {
            totalTaxes = ((Math.floor(traveledKm / 9000)) * 14) + (80 - yearsTax * 8);
            console.log(`A ${vehicleType} car will pay ${totalTaxes.toFixed(2)} euros in taxes.`);
            collectedMoney += totalTaxes;

        }else if(vehicleType === "sports") {
            totalTaxes = ((Math.floor(traveledKm / 2000)) * 18) + (100 - yearsTax * 9);
            console.log(`A ${vehicleType} car will pay ${totalTaxes.toFixed(2)} euros in taxes.`);
            collectedMoney += totalTaxes;

        }else {
            console.log("Invalid car type.");
        }
    }

    console.log(`The National Revenue Agency will collect ${collectedMoney.toFixed(2)} euros in taxes.`);
}

taxCalculator(([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]));
// taxCalculator(([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]))