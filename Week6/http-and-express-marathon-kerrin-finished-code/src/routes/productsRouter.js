import express from "express"

import Product from "../models/Product.js"

const productsRouter = express.Router()

productsRouter.get("/", (req, res) => {
  res.render("products/index", { products: Product.findFeatured()})
})

productsRouter.get("/new", (req, res) => {
  res.render("products/new")
})

productsRouter.get("/:productName", (req, res) => {
  const findMatch = req.params.productName
  const product = Product.findByName(findMatch)
  res.render("products/show", { product: product })
})

productsRouter.post("/", (req, res) => {
  const formBody = req.body
  req.body.featured = req.body.featured === "true" ? true : false
  const newProduct = new Product(formBody)
  newProduct.save()
  res.redirect("/products")
})

export default productsRouter