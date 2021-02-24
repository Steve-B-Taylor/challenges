import express from "express";

const fields = ["title", "url", "description"];

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js";
import MagicalCreature from "../models/MagicalCreature.js";
const magicalCreaturesRouter = new express.Router();

const unicorn = new MagicalCreature(creatures[0]);
// console.log(unicorn);
// console.log(unicorn.isAncient());

// magicalCreaturesRouter.get("/", (req, res) => {
//   res.render("creature-page", {
//     creaturesObj: MagicalCreature.findAll(creatures),
//   });
// });

const critters = new MagicalCreature(creatures);
// let creatureObj = critters.findAll(creatures);
// console.log(creatureObj);

magicalCreaturesRouter.get("/", (req, res) => {
  res.render("creatures/index", {
    creatures: creatures,
    // style: ["style.css", "style2.css"],
  });
});

magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  const creatureName = req.params.creatureName;
  const creatureData = creatures.find(
    (creature) => creatureName === creature.name
  );
  res.render("creatures/show", {
    creature: creatureData,
  });
});

export default magicalCreaturesRouter;
