function train(arr) {
    let wagonsArr = arr[0].split(" ");
    wagonsArr = wagonsArr.map(Number);
    
    let maxPeople = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let newArr = arr[i];
        let command = newArr.split(" ");

        if(command[0] === "Add") {
            wagonsArr.push(Number(command[1]));
        }else {
            for(let j = 0; j < wagonsArr.length; j++) {
                let peopleInWagon = Number(wagonsArr[j]);

                let number = Number(command[0]);

                if((peopleInWagon + number) <= maxPeople) {
                    wagonsArr[j] += number;
                    break;
                }
            }
        }
    }

    console.log(wagonsArr.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);


//SECOND VARIANT

function train(data) {
    let wagons = data[0].split(" ").map(Number);
    let wagonCapacity = Number(data[1]);
  
    for (let i = 2; i < data.length; i++) {
      let input = data[i].split(" ");
  
      let command = input[0];
      let passengersNumber = Number(input[1]);
  
      if (command === "Add") {
        wagons.push(passengersNumber);
      } else {
        command = Number(command);
        for (let j = 0; j < wagons.length; j++) {
          let capacity = wagonCapacity - (wagons[j] + command);
          if (capacity >= 0) {
            wagons[j] += command;
            break;
          }
        }
      }
    }
  
    return wagons.join(" ");
  }
  
  console.log(
    train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"])
  );
  console.log(
    train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"])
  );
  