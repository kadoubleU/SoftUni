function carWash(input) {
    let cleanCar = 0;

    for(let i = 0; i < input.length; i++) {
        let cleanCommand = input[i];

        if(cleanCommand === "soap") {
            cleanCar += 10;
        }else if(cleanCommand === "water") {
            cleanCar = cleanCar + (cleanCar * 0.20);
        }else if(cleanCommand === "vacuum cleaner") {
            cleanCar = cleanCar + (cleanCar * 0.25);
        }else if(cleanCommand === "mud") {
            cleanCar = cleanCar - (cleanCar * 0.10);
        }
    }

    return `The car is ${cleanCar.toFixed(2)}% clean.`;
}

console.log(
  carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);
