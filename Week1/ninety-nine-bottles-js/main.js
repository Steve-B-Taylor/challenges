//  YOUR CODE HERE

function main() {
    let bottle = 99;
    let word = 'bottles'
    
    while (bottle > 0) {
        if ((bottle % 10 > 0)) {
            punc = '.';
            //console.log(`bottle mod 10 == ${bottle % 10}`)
        } else {
            punc = '!'
        }
        console.log(`${bottle} ${word} of beer on the wall, ${bottle} ${word} of beer${punc}`)
        bottle--;
        if (bottle == 1) {
            word = 'bottle'
        } else {
            word = 'bottles'
        }
        console.log(`Take one down and pass it around, ${bottle} ${word} of beer on the wall.\n\n`)
    
    }
    console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
}

main();