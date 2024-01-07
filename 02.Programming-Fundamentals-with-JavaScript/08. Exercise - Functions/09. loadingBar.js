function loadingBar(number) {
    let loading = number / 10;

    let percents = "";
    let dots = "";

    if(loading < 10) {
        for(let i = 0; i < loading; i++) {
            percents += "%";
        }

        for(let j = 0; j < (10 - loading); j++) {
            dots += ".";
        }

        console.log(`${number}% [${percents}${dots}]`);
        console.log("Still loading...");
    }else {
        console.log("100% Complete!");
    }
       
}

loadingBar(30);
loadingBar(50)
loadingBar(100)

//SECOND VARIANT

function loadingBar(loadingPercent) {
    let loading = loadingPercent / 10;
    let loadingBarPercent = "";
    let loadingBarDots = "";
    let result = "";
    for(let j = 1; j < loading; j++) {
        loadingBarPercent += "%";
    }

    for(let i = 0; i < 10 - loading; i++) {
        loadingBarDots += ".";
    }
    
   if(loading < 10) {
    result = `${loadingPercent}% [${loadingBarPercent}%${loadingBarDots}] \nStill loading...`;
   }else {
    result = "100% Complete!";
   }

    return result;
}

console.log(loadingBar(100));