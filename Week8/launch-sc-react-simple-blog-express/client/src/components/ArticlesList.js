import React, { useState, useEffect } from "react"

import ArticleTile from "./ArticleTile"
import ArticleForm from "./ArticleForm"

const ArticlesList = (props) => {
  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    try {
      const response = await fetch("/api/v1/articles")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const data = await response.json()
      setArticles(data.articles)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  const addNewArticle = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      debugger
      setArticles([...articles, body.article])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const articleTiles = articles.map((article) => {
    return (
      <ArticleTile
        key={article.id}
        id={article.id}
        title={article.title}
        content={article.content}
      />
    )
  })

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>My Blog!</h1>
        <hr />
        <ArticleForm addNewArticle={addNewArticle} />
        {articleTiles}
      </div>
    </div>
  )
}

export default ArticlesList
