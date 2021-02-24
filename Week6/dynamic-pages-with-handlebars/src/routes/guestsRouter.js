import express from "express"

const guestsRouter = new express.Router()

const vipNerds = [
  "Grace Hopper",
  "Mark Zuckerberg",
  "Bill Gates",
  "Margaret Hamilton"
]

guestsRouter.get("/", (req, res) => {
  let nerdsFound = vipNerds.filter((name) => {
    if (req.query.search) {
      return name.startsWith(req.query.search)
    } else {
      return true
    }
  })
  res.render("search", { nerdsFound: nerdsFound || [] })
})

export default guestsRouter
