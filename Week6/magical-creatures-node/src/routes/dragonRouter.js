import express from "express";

const fields = ["title", "url", "description"];

// `creatures` variable should return to you the creature objects that you need!
import creatures from "../creatures.js";

const dragonRouter = new express.Router();
// console.log(creatures);

dragonRouter.get("/", (req, res) => {
  let myCreatures = creatures[1];
  res.render("dragon", {
    // style: ["style.css", "style2.css"],
    myCreatures,
  });
});
export default dragonRouter;
