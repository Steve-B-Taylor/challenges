import express from "express"

import Article from "../../../models/Article.js"

const randomRouter = new express.Router()

randomRouter.get("/", (req, res) => {
  res.set({ "Content-Type": "application/json" }).json(Article.findAll())
})

export default randomRouter
