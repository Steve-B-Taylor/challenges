// YOUR CODE GOES HERE
import createNewSpaceship from "./createNewSpaceship.js";
import createNewCrewMember from "./createNewCrewMember.js";
import createNewRocket from "./createNewRocket.js";

let launchpad = (ship, crewNames, ourFirstRocket) => {
  console.log("Initiating preflight procedures");
  crewNames.forEach((crewMember) => {
    ship.loadCrew(crewMember);
  });
  console.log(`${ship.captain()} is the new captain`);
  ship.mountPropulsion(ourFirstRocket);
  ship.propulsion.addFuel(5);
  ship.takeoff();
  ship.countdown(5);
};

let trainCrew = (array) => {
  let crewList = array.map((member) => {
    let newMember = createNewCrewMember(member);
    newMember.trained = true;
    return newMember;
  });
  return crewList;
};

let crewNames = [
  "Mal",
  "Zoe",
  "Wash",
  "Jayne",
  "Kayley",
  "Preacher",
  "Doc",
  "River",
];
let ship = createNewSpaceship("Serenity");
let spaceShipAwesomeCrew = trainCrew(crewNames);
let ourFirstRocket = createNewRocket();

launchpad(ship, spaceShipAwesomeCrew, ourFirstRocket);
