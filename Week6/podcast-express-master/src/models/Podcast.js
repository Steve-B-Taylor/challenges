import fs from "fs"

const podcastsPath = "podcasts.json"

const getPodcasts = () => {
  const fileContents = fs.readFileSync(podcastsPath)
  return JSON.parse(fileContents.toString()).podcasts
}

class Podcast {
  constructor(title, description, network, slug) {
    this.title = title
    this.description = description
    this.network = network
    this.slug = slug
  }

  save() {
    const existingPodcasts = getPodcasts()
    existingPodcasts.push({
      title = this.title,
      description = this.description,
      network = this.network,
      slug = this.slug,
    })
    fs.writeFileSync(podcastsPath, JSON.stringify({podcasts: existingPodcasts}))
  }

  static findAll() {
    return getPodcasts().map(
      podcastProperties =>
        new Podcast(
          podcastProperties.title,
          podcastProperties.description,
          podcastProperties.network
        )
    )
  }
}

export default Podcast
