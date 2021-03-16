import React, { useState, useEffect } from "react"

const ArticleShow = (props) => {
  const [article, setArticle] = useState({})
  const articleId = props.match.params.id

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/v1/articles/${articleId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const data = await response.json()
      setArticle(data.article)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div key={article.id} className="article-show">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleShow
