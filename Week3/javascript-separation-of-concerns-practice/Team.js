class Team {
  constructor(name, coach) {
    this.name = name;
    this.coach = coach;
    this.players = [];
  }
  signPlayer(player) {
    this.players.push(player);
  }
}

export default Team;
