import express from "express"
import _ from "lodash"

import Recipe from "../../../models/Recipe.js"

const recipesRouter = new express.Router()

recipesRouter.get("/", (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ recipes: Recipe.findAll() })
})

recipesRouter.get("/random", (req, res) => {
  const recipes = Recipe.findAll()
  const randomRecipe = _.sample(recipes)
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ recipe: randomRecipe })
})

export default recipesRouter