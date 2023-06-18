function bisquiteFactory(arr) {
    let bisquitesPerDay = Number(arr[0]);
    let workersNumber = Number(arr[1]);
    let competingFactoryBisquits30 = Number(arr[2]);

    let totalProduction = (bisquitesPerDay * workersNumber) * 20 + (Math.floor((bisquitesPerDay * 0.75) * workersNumber) * 10);

    let percentOfProduction = 0;

    if(totalProduction > competingFactoryBisquits30) {
        percentOfProduction = totalProduction - competingFactoryBisquits30;

        percentOfProduction = ((percentOfProduction / competingFactoryBisquits30) * 100).toFixed(2);

       
    }else if(totalProduction < competingFactoryBisquits30) {
        percentOfProduction = competingFactoryBisquits30 - totalProduction;

        percentOfProduction = ((percentOfProduction / competingFactoryBisquits30) * 100).toFixed(2);
    }

    console.log(`You have produced ${totalProduction} biscuits for the past month.`)
    if(totalProduction > competingFactoryBisquits30) {
        console.log(`You produce ${percentOfProduction} percent more biscuits.`)
    }else {
        console.log(`You produce ${percentOfProduction} percent less biscuits.`)
    }
}

bisquiteFactory(["78", "8", "16000"]);
bisquiteFactory(["65", "12", "26000"]);
bisquiteFactory(["163", "16", "67020"]);