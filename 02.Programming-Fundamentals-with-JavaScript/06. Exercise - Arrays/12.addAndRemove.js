function addAndRemove(arr) {

    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        let command = arr[i];
        
        if(command === "add") {
            newArray.push(i + 1);
        }else if(command === "remove") {
            newArray.pop();
        }
    }

    if(newArray.length === 0) {
        console.log("Empty");
    } else {
        newArray = newArray.join(" ");
        console.log(newArray);
    }
      
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);

//SECOND VARIANT

function addRemove(data) {
    let initialNumber = 1;
    let result = [];

    let isTrue = false;

    for(let i = 0; i < data.length; i++) {
        let command = data[i];

        if(command === "add") {
            result.push(initialNumber);
            initialNumber++;
            isTrue = true;

        } else if(command === "remove") {
            initialNumber++;
            result.pop();
            isTrue = false;
            
        }
    }

    if(isTrue) {
        console.log(result.join(" "));
    }else {
        console.log("Empty");  
    }
   
}

addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);