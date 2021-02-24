import express from "express";

import Supply from "../models/Supply.js";

const suppliesRouter = new express.Router();

suppliesRouter.get("/", (req, res) => {
  res.render("index", { supplies: Supply.findAll() });
});

suppliesRouter.post("/", (req, res) => {
  const supplyName = req.body.name;

  const newSupply = new Supply({ name: supplyName });
  console.log(newSupply.save());
  newSupply.save();
  res.redirect("/supplies");
});

export default suppliesRouter;
