import express from "express"

import Product from "../models/Product.js"

const productsRouter = express.Router()

productsRouter.get("/", (req, res) => {
  res.render("products/index", { products: Product.findFeatured() })
})

productsRouter.get("/new", (req, res) => {
  res.render("products/new")
})

productsRouter.get("/:productName", (req, res) =>{
  //get the product name the user passed in via params 
  const productName = req.params.productName
  res.render("products/show", {product: Product.find(productName)})
})

productsRouter.post("/", (req, res) => {
  const newProductName = req.body.name
  const newProductDescription = req.body.description
  //in order to save the price as an integer and not a string 
  const newProductPrice = parseFloat(req.body.price, 10)
  //to set the value of "featured" property to a boolean we can do the following...or refactor to use ? ternary operator 
  // let newProductFeatured
  // if (req.body.featured === "true") {
  //   newProductFeatured = true 
  // } else {
  //   newProductFeatured = false 
  // }
  let newProductFeatured = req.body.featured === "true" ? true : false
  // create a new Product object using our Product class 
  const newProduct = new Product({
    name: newProductName,
    description: newProductDescription,
    price: newProductPrice,
    featured: newProductFeatured
  })
  // save the new product 
  newProduct.save()
  //take us back to the index page 
  res.redirect("/products")
})

export default productsRouter
