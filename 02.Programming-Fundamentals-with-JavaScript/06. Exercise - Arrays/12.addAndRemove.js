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