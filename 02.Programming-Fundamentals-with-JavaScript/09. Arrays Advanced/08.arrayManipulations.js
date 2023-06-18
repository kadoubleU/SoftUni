function arrayManipulations(arr) {
    
    let newArr = arr[0];

    newArr = newArr.split(" ");

    for(let i = 1; i < arr.length; i++) {
       let commandArr = arr[i];

       commandArr = commandArr.split(" ");
       
        let command = commandArr[0];
        let num = Number(commandArr[1]);
        let num2 = Number(commandArr[2]);

        if(command === "Add") {
            newArr.push(num);
        }else if(command === "Remove") {

            for(let j = 0; j < newArr.length; j++) {
                let newArrNum = Number(newArr[j]);
                
                if(newArrNum === num) {
                    newArr.splice(j, 1); 
                }
            }
        } else if(command === "RemoveAt") {
            newArr.splice(num, 1);
        } else if(command === "Insert") {
            newArr.splice(num2, 0, num);
        }
    }

    console.log(newArr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

console.log("---------");

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
