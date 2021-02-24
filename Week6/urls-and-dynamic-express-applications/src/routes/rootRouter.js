import express from "express"
import productsRouter from "./productsRouter.js"
import categoriesRouter from "./categoriesRouter.js"
import guestsRouter from "./guestsRouter.js"
const rootRouter = new express.Router()

rootRouter.use("/products", productsRouter)
rootRouter.use("/categories", categoriesRouter)
rootRouter.use("/guests", guestsRouter)

export default rootRouter
