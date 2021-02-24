import express from "express"

import Article from "../../../models/Article.js"

const randomRouter = new express.Router()

randomRouter.get("/", (req, res) => {
  res.set({ "Content-Type": "application/json" }).json(Article.findAll())
})

randomRouter.post("/", (req, res) => {
  const article = new Book(req.body.article)
  if (article.isValid()) {
    article.save()
    res.status(201).json({ article })
  } else {
    res.status(422).json(article.errors)
  }
})

export default randomRouter
