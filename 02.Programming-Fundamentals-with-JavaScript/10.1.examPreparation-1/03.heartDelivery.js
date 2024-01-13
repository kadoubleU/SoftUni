function spreadLove(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let currentPosition = 0;
    let failedPlaces = 0;
    let lastPosition = 0;

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(" ");
        let command = tokens[0];
        let jumpLength = Number(tokens[1]);
        if (command === 'Love!') {
            break;
        }
        lastPosition = (currentPosition + jumpLength) % neighborhood.length;
        
        
        if(neighborhood[currentPosition] < 0) {
            currentPosition = 0;
        }else {
            currentPosition = (currentPosition + jumpLength) % neighborhood.length;
        }
       
        neighborhood[currentPosition] -= 2;

        if(neighborhood[currentPosition] === 0) {
            console.log(`Place ${currentPosition} has Valentine's day.`);
        }else if(neighborhood[currentPosition] < 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        }

        failedPlaces = neighborhood.filter(hearts => hearts > 0).length;
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    if (failedPlaces === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
    
   
}

// Example usage:
spreadLove(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("---------");
spreadLove(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);






// const 

// 

// if (failedPlaces === 0) {
//     console.log('Mission was successful.');
// } else {
//     console.log(`Cupid has failed ${failedPlaces} places.`);
// }