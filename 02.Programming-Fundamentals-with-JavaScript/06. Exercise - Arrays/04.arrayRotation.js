function arrayRotation(arr, rotations) {

    for(let i = 0; i < rotations; i++) {

        let deletedFirstElement = arr.shift();
        arr.push(deletedFirstElement);
    }

    let result = arr.join(" ");
    console.log(result);
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5 );