import express from "express"

import Question from "../../../models/Question.js"

const questionsRouter = new express.Router()

questionsRouter.get("/", (req, res) => {
  res
    .set({ "Content-Type": "application/json" })
    .status(200)
    .json({ questions: Question.findAll() })
})

questionsRouter.post("/", (req, res) => {
  const newQuestion = new Question(req.body.question)
  // debugger
  if (newQuestion.save()) {
    res.status(201).json({ newQuestion })
  } else {
    res.status(422).json({ errors: newQuestion.errors })
  }
})

export default questionsRouter
