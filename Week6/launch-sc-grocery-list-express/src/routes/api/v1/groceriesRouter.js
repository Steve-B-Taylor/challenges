import express from "express";
import Grocery from "../../../models/Grocery.js";

const apiGroceriesRouter = express.Router();

apiGroceriesRouter.get("/", (req, res) => {
  res.set({ "Content-Type": "application/json" }).json(Grocery.findAllRandom());
  const newGrocery = new Grocery(req.body);
  newGrocery.name = req.params.name;
  console.log(`FOO: ${req.params.name}`);
  newGrocery.save();
});

export default apiGroceriesRouter;
