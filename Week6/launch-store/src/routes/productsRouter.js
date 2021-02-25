import express from "express"
import Product from "../models/Product.js"

const productsRouter = express.Router()

// productsRouter.get("/", (req, res) => {
//   res.render("products/index", { products: Product.findAll() })
// })

productsRouter.get("/", (req, res) => {
  res.render("products/index", { products: Product.findFeatured() })
})

productsRouter.get("/new", (req, res) => {
  res.render("products/new")
})

export default productsRouter
