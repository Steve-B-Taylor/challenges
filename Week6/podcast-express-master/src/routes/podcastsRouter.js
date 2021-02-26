import express from "express"
import Podcast from "../models/Podcast.js"

const podcastsRouter = new express.Router()

podcastsRouter.get("/", (req, res) => {
  console.log(Podcast.findAll())
  console.log(typeof Podcast.findAll())
  const podcasts = Podcast.findAll()
  res.render("index", { podcasts: podcasts })
})

export default podcastsRouter
