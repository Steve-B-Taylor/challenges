import { iteratee } from "lodash";
import Card from "../Card.js";
import Deck from "../Deck.js";
import Game from "../Game.js";
import Hand from "../Hand.js";

// Your tests here
describe("the game", () => {
  // const suits = ["♦", "♣", "♠", "♥"];
  // const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let card;
  let deck;
  let deckLength;
  let value1;
  let hands;

  beforeEach(() => {
    // card = new Card(suit, rank);
    card = new Card(5, "♦");
    deck = new Deck();
    deckLength = deck.cards.length;
    // hand = new Hand([{ rank: 10, value: "♦" }]);
  });

  it("card initiates with a rank", () => {
    if (Number.isInteger(card.rank)) {
      expect(card.rank).toBeGreaterThan(1);
      expect(card.rank).toBeLessThan(11);
    }
    rank: expect.stringMatching(/J|Q|K|A/);
  });

  it("creates a card with a suit", () => {
    rank: expect.stringMatching(/♦|♣|♠|♥/);
  });

  it("calculates the card value", () => {
    card.assignValue();
    expect(card.value).toEqual(5); // this should reflect our value in "card = new Card(5, "♦"); above"
  });

  it("creates a deck of 52 cards", () => {
    expect(deckLength).toEqual(52);
  });

  beforeEach(() => {
    hands = deck.deal();
    value1 = hands[0].value();
  });

  it("creates 2 hands", () => {
    expect(hands.length).toEqual(2);
  });

  it("removes 8 cards from the deck", () => {
    expect(deck.cards.length).toEqual(44);
  });

  it("creates hands with 4 cards", () => {
    expect(hands[0].cards.length).toEqual(4);
    expect(hands[1].cards.length).toEqual(4);
  });

  it("returns the total value of cards in a hand", () => {
    expect(value1).toBeGreaterThanOrEqual(8);
    expect(value1).toBeLessThanOrEqual(56);
  });
});
