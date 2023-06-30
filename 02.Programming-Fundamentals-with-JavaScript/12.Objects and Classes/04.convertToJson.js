function convertToJson(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };

    let text = JSON.stringify(obj);

    return text;
}

console.log(convertToJson('George', 'Jones',
'Brown'));