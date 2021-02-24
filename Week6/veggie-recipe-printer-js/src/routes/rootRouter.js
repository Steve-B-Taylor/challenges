import express from "express";
import brusselsSproutsRouter from "./brusselsSproutsRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  // hint: use res.send
  res.send(`VEGGIE POWER`);
});

rootRouter.use("/brussels-sprouts", brusselsSproutsRouter);

export default rootRouter;
