import express from "express";

import ConcertVenue from "../../../models/ConcertVenue.js";

const concertVenuesRouter = new express.Router();

concertVenuesRouter.get("/", async (req, res) => {
  try {
    const venues = await ConcertVenue.findAll();
    res.json({ concertVenues: venues });
  } catch (error) {
    console.error(error);
    res.json({ errors: error });
  }
});

concertVenuesRouter.post("/", (req, res) => {
  try {
    const formData = req.body;
    // console.log(`formData: ${formData}`);
    const newVenue = new ConcertVenue(formData);
    newVenue.save();

    res.json({ concertVenues: newVenue });
  } catch (error) {
    console.error(error);
  }
});

export default concertVenuesRouter;
