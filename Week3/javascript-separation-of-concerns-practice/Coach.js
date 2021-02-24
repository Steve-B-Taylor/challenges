class Coach {
  constructor(name, firstYear) {
    this.name = name;
    this.firstYear = firstYear;
    this.stats = {
      wins: 0,
      losses: 0,
      draws: 0,
      matchesPlayed: 0,
    };
  }
  gameOver(result) {
    if (result === "W") this.stats.wins++;
    if (result === "L") this.stats.losses++;
    if (result === "D") this.stats.draws++;
    this.stats.matchesPlayed++;
  }
}

export default Coach;
