import fs from "fs"

const articlesPath = "articles.json"

class Article {
  constructor({ title, url, description }) {
    this.title = title
    this.url = url
    this.description = description
    this.errors = []
  }

  static findAll() {
    const articlesData = JSON.parse(fs.readFileSync(articlesPath)).articles
    const articles = articlesData.map((article) => {
      return new Article(article)
    })
    // console.log(articles)
    return articles
  }

  save() {
    if (this.isValid()) {
      const articles = this.constructor.findAll()
      articles.push(this)
      fs.writeFileSync(articlesPath, JSON.stringify({ articles: articles }))
    }
  }

  isValid() {
    const errorObj = {
      title: ["can't be blank"],
      url: ["can't be blank", "must be valid"],
      description: ["must be at least 20 characters long"]
    }
    if (!this.title) {
      this.errors.push(`Title ${errorObj.title[0]}`)
    }
    if (!this.url) {
      this.errors.push(`URL ${errorObj.url[0]}`)
    }
    if (!this.url.match(/^https?:\/\/(.*)/)) {
      this.errors.push(`URL ${errorObj.url[1]}`)
    }
    if (this.description.length < 21) {
      this.errors.push(`Description ${errorObj.description[0]}`)
    }
    if (this.errors.length > 0) {
      return false
    } else {
      return true
    }
  }
}

export default Article
