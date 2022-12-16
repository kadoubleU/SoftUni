function weatherForecast(input) {

    let forecast = (input[0]);
    let result = forecast.toLowerCase();

    if (result == "sunny") {
        console.log("It's warm outside!");
    }
    else {
        console.log("It's cold outside!");
    }

}

weatherForecast(["Sunny"]);