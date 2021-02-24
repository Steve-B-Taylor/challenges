import createNewSpaceship from "./createNewSpaceship.js";
import createNewCrewMember from "./createNewCrewMember.js";

const launchpad = (newShip, newCrew) => {
  console.log("Initiating preflight procedures...");
  console.log(`Welcome aboard the ${newShip.argName}!`);
  newShip.trainCrew(newCrew);
};

const trainCrew = (crew) => {
  let trainedCrew = crew.map((crewMember) => {
    let member = createNewCrewMember(crewMember);
    member.trained = true;
    return member;
  });
  return trainedCrew;
};

const ship1 = createNewSpaceship("Serenity");
const crew1 = [
  "Mal",
  "Zoe",
  "Jayne",
  "Wash",
  "Kayley",
  "Inara",
  "Preacher",
  "Doc",
  "River",
];
const trainCrew1 = trainCrew(crew1);

launchpad(ship1, trainCrew1);
