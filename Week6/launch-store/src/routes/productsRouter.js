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

productsRouter.get("/:productName", (req, res) => {
  const productName = req.params.productName
  res.render("products/show", { product: Product.findProduct(productName) })
})

productsRouter.post("/:productName", (req, res) => {
  const productName = req.params.productName
  const productDel = Product.delete(productName)
  // productDel.delete()
  res.render("products/index")
})

productsRouter.post("/", (req, res) => {
  const newProduct = new Product(req.body)
  newProduct.name = req.body.name
  newProduct.description = req.body.description
  newProduct.price = req.body.price
  newProduct.featured = req.body.featured === "on" ? true : false
  if (!newProduct.isValid()) {
    res.render("products/add", { product: newProduct })
  } else {
    newProduct.save()
    res.redirect("/products")
  }
})

export default productsRouter
