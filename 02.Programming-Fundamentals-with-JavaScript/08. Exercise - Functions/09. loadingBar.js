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