// YOUR CODE, HERE
function promptCheck(check) {
    if (check === null) usercheckPrompt = ''
    try {
        check = check.trim()
    } catch(error) {
        console.error(error)
    }
    
    if (check === null || check === '') {
        console.log('FOO null or empty string')
        return
    }
    if (check.toLowerCase() !== 'yes' && check.toLowerCase() !== 'no') {
        return('not yes or no')
    }

}
function first() {
    let userPrompt = prompt('Enter Yes or No')
    let chk = promptCheck(userPrompt)
    console.log(chk)
}
    
first()


function main() {

let reRoll = true;
let newRoll = false;

sides = prompt('How many sides does your dice have?');
numRolls = prompt('How many times would you like to roll your pair of dice?');

function rollRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function rollDice(numRolls) {
    for (i = 0; i < numRolls; i++) {
        let rollOne = rollRandomNum(1, sides);
        let rollTwo = rollRandomNum(1, sides);
        console.log(`You rolled a ${rollOne} and a ${rollTwo} for a total of ${rollOne + rollTwo}`);
    }
}




while (reRoll) {
    if (newRoll !== true) rollDice(numRolls);
    let rolls = prompt('Press \'Y\' to roll again, \'S\' to stop');
    switch (rolls) {
        case "y":
            reRoll = true;
            newRoll = false
            break;
        case "Y":
            reRoll = true;
            newRoll = false
            break;
        case "S":
            reRoll = false;
            console.log('Thanks for playing!');
            break;
        case "s":
            reRoll = false;
            console.log('Thanks for playing!');
            break;
        default:
            newRoll = true;
            alert('Did not recognize that entry');
    }
}

}