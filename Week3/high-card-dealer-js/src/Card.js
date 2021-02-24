class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value;
  }
  assignValue() {
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.value = ranks.indexOf(this.rank) + 2;
  }
}

export default Card;
