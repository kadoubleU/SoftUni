function cats(arr) {

    for (let i = 0; i < arr.length; i++) {
        let cat = arr[i];
        let catAndMeow = cat.split(" ");

        let name = catAndMeow[0];
        let age = catAndMeow[1];

        console.log(`${name}, age ${age} says Meow`);

    }
}

cats(['Mellow 2', 'Tom 5']);