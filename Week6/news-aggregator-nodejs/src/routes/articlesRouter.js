import express from "express"
import Article from "../models/Article.js"

const articlesRouter = new express.Router()

articlesRouter.get("/", (req, res) => {
  const findAllArticles = Article.findAll()
  const pageSize = 10
  const totalArticles = findAllArticles.length
  const totalPages = Math.ceil(totalArticles / pageSize)
  let currentPage = req.query.page
  if (!currentPage) currentPage = 1
  const showArticles = findAllArticles.slice(currentPage - 1, currentPage + pageSize)
  let displayArticles = []
  displayArticles.push(showArticles)
  res.locals.currentPage = currentPage
  res.locals.displayArticles = displayArticles
  console.log(`FOO:  ${res.locals.displayArticles[0]}`)
  res.render("articles/index", { articles: Article.findAll() })
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new")
})

articlesRouter.post("/new", (req, res) => {
  // const articleTitle = req.body.title
  // const articleUrl = req.body.url
  // const articleDesc = req.body.description
  const newArticle = new Article(req.body)
  newArticle.save()
  if (newArticle.errors) {
    res.render("articles/new", newArticle)
  } else {
    res.redirect("/articles")
  }
})

// magicalCreaturesRouter.get("/:creatureName", (req, res) => {
//   const creatureName = req.params.creatureName
//   const creatureData = creatures.find((creature) => creatureName === creature.name)
//   res.render("creatures/show", {
//     creature: creatureData
//   })
// })

export default articlesRouter
