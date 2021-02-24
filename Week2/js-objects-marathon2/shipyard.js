// YOUR CODE GOES HERE
import createNewSpaceship from "./createNewSpaceship.js";
import createNewCrewMember from "./createNewCrewMember.js";
import createNewRocket from "./createNewRocket.js";

let launchpad = (shipVar, crewVar, rocketVar) => {
  console.log("Initiating preflight proceedures...");
  console.log(`Welcome aboard the ${shipVar.name}`);
  shipVar.loadCrew(crewVar);
  let shipCaptain = shipVar.captain();
  console.log(`${shipCaptain.name} will be the captain`);
  rocketVar.addFuel(10);
  shipVar.mountPropulsion(rocketVar);
  shipVar.takeOff();
};

const trainCrew = (crewArray) => {
  let trainedCrew = crewArray.map((crewMember) => {
    let member = createNewCrewMember(crewMember);
    member.trained = true;
    return member;
  });
  return trainedCrew;
};

// const crewOne = ["Han", "Chewie", "Luke", "Leia", "C3PO", "R2D2"];
// const shipOne = createNewSpaceship("Millenium Falcon");
// const trainedCrewOne = trainCrew(crewOne);

const crewTwo = [
  "Mal",
  "Zoe",
  "Wash",
  "Kayley",
  "Jayne",
  "Doc",
  "River",
  "Preacher",
];
const shipTwo = createNewSpaceship("Serenity");
const trainedCrewTwo = trainCrew(crewTwo);
const ourFirstRocket = createNewRocket();

launchpad(shipTwo, trainedCrewTwo, ourFirstRocket);
