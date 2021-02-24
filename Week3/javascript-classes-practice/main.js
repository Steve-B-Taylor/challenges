import Person from "./Person.js";
import Car from "./Car.js";
import Plane from "./Plane.js";
import Card from "./Card.js";
import Deck from "./Deck.js";

let mario = new Person("Mario", 26);
console.log(mario);
console.log(`${mario.name} is ${mario.age}`);
mario.celebrateBirthday();
console.log(`${mario.name} is ${mario.age}`);

// add our "Toyota Camry" with a mileage of 5000
let car = new Car("Toyota", "Camry", 5000);
console.log(car);
console.log(`Our car's mileage is ${car.mileage}`);
car.drive(467);
console.log(`Our car's mileage is ${car.mileage}`);

// add our "Launch 783" plane with a capacity of 2
let plane = new Plane("Launch", "783", 2);
console.log(plane);
plane.board();
plane.board();
plane.board();

console.log("\n\n============================\n\n");
let card = new Card("10", "diamonds");
console.log(card);
let deck = new Deck();
console.log(deck);
deck.addCard(card);
console.log(deck);
console.log(deck.cards);
