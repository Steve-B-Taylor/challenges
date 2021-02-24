import Player from "./Player.js";
import Team from "./Team.js";
import Coach from "./Coach.js";

let drogba = new Player("Didier Drogba", 11, "Striker");
let alonso = new Player("Marcos Alonso", 3, "Left back");
let messi = new Player("Lionel Messi", 10, "Forward");
let ronaldo = new Player("Cristiano Ronaldo", 7, "Forward");
let chelsea = new Team("Chelsea", "Frank Lampard");
let barca = new Team("Barcelona", "Quique Setién");
let juvi = new Team("Juventus", "Maurizio Sarri");

let frank = new Coach("Frank Lampard", 2020);
let quique = new Coach("Quique Setién", 2020);
let maurizio = new Coach("Maurizio Sarri", 2019);

chelsea.signPlayer(drogba.name);
chelsea.signPlayer(alonso.name);
barca.signPlayer(messi.name);
juvi.signPlayer(ronaldo.name);

drogba.score();
drogba.score();
drogba.assist();
alonso.score();
messi.assist();
messi.score();
ronaldo.assist();
ronaldo.redCard();

console.log("Drogba's stats:");
console.log(drogba.stats);
console.log("Alonso's stats:");
console.log(alonso.stats);
console.log("Messi's stats:");
console.log(messi.stats);
console.log("Ronaldo's stats:");
console.log(ronaldo.stats);

frank.gameOver("W");
quique.gameOver("L");
maurizio.gameOver("D");

console.log(`\n\n${frank.name} is the head coach for ${chelsea.name}`);
console.log(
  `${frank.name} stats: wins: ${frank.stats.wins}, losses: ${frank.stats.losses}, draws: ${frank.stats.draws}, matchesPlayed: ${frank.stats.matchesPlayed}`
);

console.log(`${quique.name} is the head coach for ${barca.name}`);
console.log(
  `${quique.name} stats: wins: ${quique.stats.wins}, losses: ${quique.stats.losses}, draws: ${quique.stats.draws}, matchesPlayed: ${quique.stats.matchesPlayed}`
);

console.log(`${maurizio.name} is the head coach for ${juvi.name}`);
console.log(
  `${maurizio.name} stats: wins: ${maurizio.stats.wins}, losses: ${maurizio.stats.losses}, draws: ${maurizio.stats.draws}, matchesPlayed: ${maurizio.stats.matchesPlayed}`
);
