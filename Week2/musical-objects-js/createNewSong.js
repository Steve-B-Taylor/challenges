let createNewSong = (title, characters = [], length) => {
  let songs = {
    title,
    characters,
    length
  }
  return songs
}

export default createNewSong