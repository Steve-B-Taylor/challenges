// your code here
import Airplane from "./Airplane.js";
import Flight from "./Flight.js";
import Passenger from "./Passenger.js";

const planeOne = new Airplane("Boeing", "787", 280);
const flightOne = new Flight(
  "2/1/2021",
  "13:30",
  "18:30",
  "SeaTac",
  "Lindberg Field"
);
const passengerOne = new Passenger("Person One");
const passengerTwo = new Passenger("Person Two");
const ticketOne = passengerOne.purchaseTicket(flightOne, "12B");
const ticketTwo = passengerTwo.purchaseTicket(flightOne, "16A");
planeOne.scheduleFlight(flightOne);
// console.log(passengerOne);
console.log(ticketOne);
console.log(ticketTwo);
// console.log(passengerOne.flights);
