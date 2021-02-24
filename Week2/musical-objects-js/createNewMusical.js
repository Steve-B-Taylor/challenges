let createNewMusical = (title, composer, numberOfTonys) => {
  let musical = {
    title,
    composer,
    numberOfTonys,
    songs: [],
    addSong(song) {
      this.songs.push(song);
    },
  };
  return musical;
};

export default createNewMusical;
