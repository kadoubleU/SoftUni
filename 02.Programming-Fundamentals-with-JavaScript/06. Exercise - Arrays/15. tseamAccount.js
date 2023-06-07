function tseamAccount(arr) {
    let newArray = [];
    newArray = arr.toString();
    newArray = newArray.split(",");

    let games = [];
    games = newArray[0];
    let command = [];

    let gamesOperations = [];
    gamesOperations.push(games);
    gamesOperations = gamesOperations.toString();
    gamesOperations = gamesOperations.split(" ");
    

    for(let i = 1; i < newArray.length - 1; i++) {
        command = newArray[i];
        command = command.toString();
        command = command.split(" ");

        let commandValue = command[0];
        let gameName = command[1];

        if(commandValue === "Install" && gamesOperations.includes(gameName) === false) {
            gamesOperations.push(gameName);
        }else if(commandValue === "Uninstall" && gamesOperations.includes(gameName) === true) {
            let index = gamesOperations.indexOf(gameName);
            gamesOperations.splice(index, 1); 
        }else if(commandValue === "Update" && gamesOperations.includes(gameName) === true) {
            gamesOperations.push(gameName);
            let index = gamesOperations.indexOf(gameName);
            gamesOperations.splice(index, 1);
            
        }else if(commandValue === "Expansion") {
            let expansion = gameName.split('-');
            let game = expansion[0];
 
            if (gamesOperations.includes(game)) {
                let expandedGame = `${game}:${expansion[1]}`;
                let index = gamesOperations.indexOf(game);
                gamesOperations.splice(index + 1, 0, expandedGame);
            }
        }
    }
    gamesOperations = gamesOperations.join(" ");
    console.log(gamesOperations);
    
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
console.log("---------------");
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);