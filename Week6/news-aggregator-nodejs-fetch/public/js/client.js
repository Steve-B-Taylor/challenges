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
  console.log(`JoeDog:  ${articles[findRandomArticle].title}`)
  console.log(`JoeDog:  ${articles[findRandomArticle].url}`)
  console.log(`JoeDog:  ${articles[findRandomArticle].description}`)
  console.log(`JoeDog:  ${findRandomArticle}`)
}

addRandomArticle()
