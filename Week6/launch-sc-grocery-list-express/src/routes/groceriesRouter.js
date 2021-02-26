import express from "express";
import Grocery from "../models/Grocery.js";

const groceriesRouter = express.Router();

groceriesRouter.get("/", (req, res) => {
  res.render("groceries/index", { groceries: Grocery.findAll() });
});

groceriesRouter.get("/new", (req, res) => {
  res.render("groceries/new");
});

groceriesRouter.post("/", (req, res) => {
  const newGrocery = new Grocery(req.body);
  newGrocery.name = req.body.name;
  if (newGrocery.isValid()) {
    newGrocery.save();
    res.redirect("/groceries");
  } else {
    res.render("groceries/new");
  }
});

export default groceriesRouter;
