import Deck from "./Deck.js";
import Card from "./Card.js";
import Hand from "./Hand.js";

// GAME START
// console.log("\nGAME START!");
let deck = new Deck();
// console.log(`\nThere are ${deck.cards.length} cards in the deck.\n`);

let theDeal = deck.deal();
let theHands = (hand) => {
  let handArray = [];
  hand.cards.forEach((card) => {
    handArray.push(`${card.rank}${card.suit}`);
  });
  return handArray;
};

// console.log(`Player 1 was dealt ${theHands(theDeal[0]).join(", ")}`);
// console.log(`Player 1 was dealt ${theHands(theDeal[1]).join(", ")}\n`);
let value1 = theDeal[0].value();
let value2 = theDeal[1].value();

// console.log(`Player 1's hand value: ${value1}`);
// console.log(`Player 2's hand value: ${value2}\n`);

if (value1 > value2) {
  // console.log("Player 1 wins the game!\n");
} else if (value1 === value2) {
  // console.log("It's a tie!\n");
} else {
  // console.log("Player 2 wins the game!\n");
}
