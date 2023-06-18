function houseParty(arr) {

    let partyList = [];

    for(const person of arr) {
        
        let details = person.split(" ");
        let personName = details[0];

        if(details.includes("not")) {
            if(partyList.includes(personName)) {
                let index = partyList.indexOf(personName);

                if(index !== -1) {
                    partyList.splice(index, 1);
                }
            } else {
                console.log(`${personName} is not in the list!`);
            }
        }else {
            if(partyList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            }else {
                partyList.push(personName);
            }
        }
    }
    
    console.log(partyList.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

console.log("---------------");

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);