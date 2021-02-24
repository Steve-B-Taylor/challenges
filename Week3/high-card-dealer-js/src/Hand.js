class Hand {
  constructor(cards) {
    this.cards = [];
  }
  value() {
    let sum = 0;
    this.cards.forEach((card) => {
      sum += card.value;
    });
    return sum;
  }
}

export default Hand;
