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



//SECOND VARIANT

function houseParty(data) {
    let guestList = [];
  
    for (let i = 0; i < data.length; i++) {
      let isGoing = data[i].split(" ");
  
      let personName = isGoing[0];
  
      if (!isGoing.includes("not")) {
        if (guestList.includes(personName)) {
          console.log(`${personName} is already in the list!`);
        } else {
          guestList.push(personName);
        }
      } else {
        if (guestList.includes(personName)) {
          let index = guestList.indexOf(personName);
          guestList.splice(index, 1);
        } else {
          console.log(`${personName} is not in the list!`);
        }
      }
    }
  
    return guestList.join("\n");
  }
  
  console.log(
    houseParty([
      "Allie is going!",
      "George is going!",
      "John is not going!",
      "George is not going!",
    ])
  );
  
  console.log("---------");
  
  console.log(
    houseParty([
      "Tom is going!",
      "Annie is going!",
      "Tom is going!",
      "Garry is going!",
      "Jerry is going!",
    ])
  );
  