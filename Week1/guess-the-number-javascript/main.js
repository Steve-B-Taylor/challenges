// YOUR CODE HERE

let randomNum = Math.floor((Math.random() * 10) + 1);
let finalRand = randomNum.toString();
console.log(finalRand)
let userName = prompt("What is your name?");
let userNum = prompt("Guess a number (between 1 and 10): ")

if (finalRand === userNum) {
    alert("Yes! You guessed it, good job!");
} else {
    alert("Sorry, that's not right... the number was " + finalRand + '.');
}