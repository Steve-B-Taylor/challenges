import _ from "lodash";
import Card from "./Card.js";
import Hand from "./Hand.js";

const suits = ["♦", "♣", "♠", "♥"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

class Deck {
  constructor() {
    this.cards = this.buildDeck();
  }

  buildDeck() {
    let cards = [];
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        cards.push(new Card(rank, suit));
      });
    });
    return _.shuffle(cards);
  }

  deal() {
    let hand1 = new Hand();
    let hand2 = new Hand();
    let hands = [];

    for (let i = 0; i < 4; i++) {
      this.cards[0].assignValue();
      hand1.cards.push(this.cards.shift());
      this.cards[0].assignValue();
      hand2.cards.push(this.cards.shift());
    }

    hands.push(hand1);
    hands.push(hand2);
    return hands;
  }
}

export default Deck;
