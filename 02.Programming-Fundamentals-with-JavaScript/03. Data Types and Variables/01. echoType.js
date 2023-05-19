function echoType(param) {
    let paramType = typeof param;

    if(paramType === "string" || paramType === "number") {
        console.log(paramType);
        console.log(param);
    }else {
        console.log(paramType);
        console.log("Parameter is not suitable for printing");
    }
}

echoType('Hello, JavaScript!');
console.log("-----------------");
echoType(18);
console.log("-----------------");
echoType(null);