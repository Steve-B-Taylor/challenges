import React, { useState } from "react"
import { hot } from "react-hot-loader/root"

import RandomSprout from "./RandomSprout"
import SproutsIndex from "./SproutsIndex"

const App = (props) => {
  const [randomRecipe, setRandomRecipe] = useState("")
  const [recipes, setRecipes] = useState([])

  const getRandomRecipe = async () => {
    try {
      const response = await fetch("/api/v1/recipes/random")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const recipeData = await response.json()
      setRandomRecipe(recipeData.recipe)
      // console.log(`Body: ${recipeData.recipe}`)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const getAllRecipes = async () => {
    try {
      const response = await fetch("/api/v1/recipes")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const recipeData = await response.json()
      setRecipes(recipeData.recipes)
      // console.log(`Body: ${recipeData.recipe}`)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const handleRandomClick = () => {
    getRandomRecipe()
    setRecipes([])
  }

  const handleIndexClick = () => {
    getAllRecipes()
    setRandomRecipe("")
  }

  return (
    <div className="container">
      <h1>Sprout Fetcher</h1>

      <div className="buttons">
        <button onClick={handleRandomClick} className="btn">
          Get Random Recipe
        </button>

        <button onClick={handleIndexClick} className="btn">
          See All Recipes
        </button>

        <RandomSprout recipe={randomRecipe} />
        <SproutsIndex recipes={recipes} />
      </div>
    </div>
  )
}

export default hot(App)
