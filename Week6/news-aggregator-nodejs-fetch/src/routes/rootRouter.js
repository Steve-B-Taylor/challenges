import express from "express"
import articlesRouter from "./articlesRouter.js"
import randomRouter from "./api/v1/randomRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/articles", articlesRouter)

rootRouter.use("/api/v1/random", randomRouter)

export default rootRouter
