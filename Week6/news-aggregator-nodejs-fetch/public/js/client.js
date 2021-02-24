const fetchArticles = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/random")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    }
    const responseBody = await response.json()
    console.log("responseBody:", responseBody)
    return responseBody
  } catch (err) {
    console.error("Error in fetch!")
    console.error(err)
  }
}

function genRandom(max) {
  return Math.floor(Math.random() * max - 1)
}

const addRandomArticle = async () => {
  const articles = await fetchArticles()
  findRandomArticle = genRandom(articles.length)
  const rndTitle = document.getElementById("article-title")
  const rndURL = document.getElementById("article-link")
  const rndDesc = document.getElementById("article-description")

  rndTitle.innerHTML = `<li>${articles[findRandomArticle].title}</li>`
  rndURL.innerHTML = `<li><a href="${articles[findRandomArticle].url}" target="_blank">${
    articles[findRandomArticle].url
  }</a></li>`
  rndDesc.innerHTML = `<li>${articles[findRandomArticle].description}</li>`
}
let editButton = document.getElementById("randomArticle")

editButton.addEventListener("click", () => {
  addRandomArticle()
})
