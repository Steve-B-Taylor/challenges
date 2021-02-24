// YOUR CODE GOES HERE
function genRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function main() {
    console.log("Hello, I'm the first and only Talking Vending Machine.\n");

    // Ask the user what vending machine item they would like.
    // Accept the user answer and save it as a variable.
    let vendItem = prompt('What item would you like?').trim();

    // Ask the user how many of the vending machine item they would like.
    // Accept the user's answer (should be a number) and save it as a variable
    let numItems = prompt(`How many ${vendItem}(s) would you like?`);
    let tonsItems = numItems.search("tons");

    if (numItems.search("tons") >= 0) {
        numItems = genRandInt(1, 19);
        console.log(`TONS (or ${numItems}) ;-) ${vendItem}(s) coming right up!`)
    } else if (parseInt(numItems) > 0) {
        console.log(`${numItems} ${vendItem}(s) coming right up!`)
    }
    else {
        console.log('Maybe next time, bye!')
        return
    }
    // Use the answer to start a while loop, in which you print the word the user asked for, the number of times that they specified.
    while (numItems > 0) {
        console.log(vendItem);
        numItems--;
    }
    console.log('\nThere you go! Come again!');
}

main()